# 组件(component)
组件允许你将UI拆分为独立的可重用的部分,并单独的考虑每个部分。React推荐以组件的方式去重新思考UI构成，将UI上每一个功能相对独立的模块定义成组件，然后将小的组件通过组合或者嵌套的方式构成大的组件，最终完成整体UI的构建。

## 一个组件应该具有如下特征：

（1）**可组合（Composeable）**：一个组件易于和其它组件一起使用，或者嵌套在另一个组件内部。如果一个组件内部创建了另一个组件，那么说父组件拥有（own）它创建的子组件，通过这个特性，一个复杂的UI可以拆分成多个简单的UI组件；

（2）**可重用（Reusable）**：每个组件都是具有独立功能的，它可以被使用在多个UI场景；

（3）**可维护（Maintainable）**：每个小的组件仅仅包含自身的逻辑，更容易被理解和维护；


## props  -组件属性
`this.props`对象的属性与组件的属性一一对应, 是一个只读对象，我们不能去改变props的值。
> 有一个例外，就是 this.props.children 属性,它表示组件的所有子节点

**Example1 [#](/demo/message)**

```js
class Message extends Component{
    render() {
        return (
            <div>
                <div>
                    <img src={this.props.message.author.head} />
                    <div>{this.props.message.author.name}</div>
                    <div>{this.props.message.date}</div>
                </div>
                <div>
                    {this.props.message.text}
                </div>
            </div>
        );
    }
}
```
```js
const message = {
    date: new Date().toLocaleTimeString(),
    text: `React is flexible and can be used in a variety of projects. 
          You can create new apps with it, but you can also gradually introduce it into 
          an existing codebase without doing a rewrite.`,
    author:{
        name: 'Tom'
    }
};
ReactDOM.render(
    <Message message={message} />,
    document.getElementById('root')
);
```
上面代码中， `Message` 就是一个组件类。
模板插入 `<Message />` 时，会自动生成 Message 的一个实例。



## state -组件状态
组件免不了要与用户互动，React 的一大创新，就是将组件看成是一个状态机，一开始有一个初始状态，然后用户互动，导致状态变化，从而触发重新渲染 UI 
React的组件都有自己的状态，这个内部状态使用state表示。通过调用`setState()`来改变`this.state`的值。

** Example2 [#](/demo/clock)**

```js
class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {
            toggle:false,
            date:new Date().toLocaleTimeString()
        }
    }

    toggle(){
        if(this.state.toggle){
            clearInterval(this.timeId);
        }else{
            this.timeId = setInterval(this.tick.bind(this),1000);
        }
        this.setState({
            toggle:!this.state.toggle
        });
    }
    tick(){
        this.setState({
            date: new Date().toLocaleTimeString()
        });
    }
    render(){
        return (
            <div>
                <button onClick={this.toggle.bind(this)}>{this.state.toggle ? 'stop' : 'start'}</button>
                <p>{this.state.date}</p>
            </div>
            )
    }
}
```
