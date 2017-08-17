# flux

[flux demo](/demo/fluxTab)

Flux将一个应用分成四个部分:

* View:视图层
* Action(动作):视图层发出的消息（比如mouseClick）
* Dispatcher（派发器）：用来接收Actions、执行回调函数
* Store（数据层）：用来存放应用的状态，一旦发生变动，就提醒Views要更新页面

![fluxTab](http://www.ruanyifeng.com/blogimg/asset/2016/bg2016011503.png)

Flux 的最大特点，就是数据的"单向流动"

1. 用户访问 View
2. View 发出用户的 Action
3. Dispatcher 收到 Action，要求 Store 进行相应的更新
4. Store 更新后，发出一个"change"事件
5. View 收到"change"事件后，更新页面

上面过程中，数据总是"单向流动"，任何相邻的部分都不会发生数据的"双向流动"。这保证了流程的清晰。

### View

```js
var React = require('react');
var ReactDOM = require('react-dom');
var MyButtonController = require('./components/MyButtonController');

ReactDOM.render(
  <MyButtonController/>,
  document.querySelector('#example')
);
```
这里采用的是 React 的 controller view 模式。"controller view"组件只用来保存状态，然后将其转发给子组件
```js
var React = require('react');
var ButtonActions = require('../actions/ButtonActions');
var MyButton = require('./MyButton');

var MyButtonController = React.createClass({
  createNewItem: function (event) {
    ButtonActions.addNewItem('new item');
  },

  render: function() {
    return <MyButton
      onClick={this.createNewItem}
    />;
  }
});

module.exports = MyButtonController;
```
MyButtonController将参数传给子组件MyButton

```js
var React = require('react');

var MyButton = function(props) {
  return <div>
    <button onClick={props.onClick}>New Item</button>
  </div>;
};

module.exports = MyButton;
```
上面代码中，可以看到MyButton是一个纯组件（即不含有任何状态），从而方便了测试和复用。这就是"controll view"模式的最大优点。

MyButton只有一个逻辑，就是一旦用户点击，就调用this.createNewItem 方法，向Dispatcher发出一个Action。

```js
// ...
  createNewItem: function (event) {
    ButtonActions.addNewItem('new item');
  }
```
调用createNewItem方法，会触发名为addNewItem的Action。

### Action

每个Action都是一个对象，包含一个actionType属性（说明动作的类型）和一些其他属性（用来传递数据）,ButtonActions 对象用于存放所有的Action

```js
var AppDispatcher = require('../dispatcher/AppDispatcher');

var ButtonActions = {
  addNewItem: function (text) {
    AppDispatcher.dispatch({
      actionType: 'ADD_NEW_ITEM',
      text: text
    });
  },
};
```
ButtonActions.addNewItem方法使用AppDispatcher，把动作ADD_NEW_ITEM派发到Store。

### Dispatcher

Dispatcher 的作用是将 Action 派发到 Store、。你可以把它看作一个路由器，负责在 View 和 Store 之间，建立 Action 的正确传递路线。注意，Dispatcher 只能有一个，而且是全局的

```js
var Dispatcher = require('flux').Dispatcher;
module.exports = new Dispatcher()
```
AppDispatcher.register()方法用来登记各种Action的回调函数

```js
var ListStore = require('../stores/ListStore');

AppDispatcher.register(function (action) {
  switch(action.actionType) {
    case 'ADD_NEW_ITEM':
      ListStore.addNewItemHandler(action.text);
      ListStore.emitChange();
      break;
    default:
      // no op
  }
})
```
Dispatcher收到ADD_NEW_ITEM动作，就会执行回调函数，对ListStore进行操作。

Dispatcher 只用来派发 Action，不应该有其他逻辑
### Store

Store 保存整个应用的状态

ListStore，所有数据都存放在那里

```js
var ListStore = {
  items: [],

  getAll: function() {
    return this.items;
  },

  addNewItemHandler: function (text) {
    this.items.push(text);
  },

  emitChange: function () {
    this.emit('change');
  }
};

module.exports = ListStore;
```

ListStore.items用来保存条目，ListStore.getAll()用来读取所有条目，ListStore.emitChange()用来发出一个"change"事件

由于 Store 需要在变动后向 View 发送"change"事件，因此它必须实现事件接口

```js
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ListStore = assign({}, EventEmitter.prototype, {
  items: [],

  getAll: function () {
    return this.items;
  },

  addNewItemHandler: function (text) {
    this.items.push(text);
  },

  emitChange: function () {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }
});
```
ListStore继承了EventEmitter.prototype，因此就能使用ListStore.on()和ListStore.emit()，来监听和触发事件了

Store 更新后（this.addNewItemHandler()）发出事件（this.emitChange()），表明状态已经改变。 View 监听到这个事件，就可以查询新的状态，更新页面了