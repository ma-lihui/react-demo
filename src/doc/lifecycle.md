# 生命周期
组件在整个 React 的生命周期中，主要会经历这3个阶段：挂载(Mounting)、更新(Updating)、卸载(Unmounting)。
![react lifecycle](http://upload-images.jianshu.io/upload_images/1417629-4ee80c3ad65de2a3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240 )  
下面对各个阶段分别进行介绍。

## 1.挂载(Mounting)阶段
该阶段主要发生在实例化组件类的时候，也就是该组件类被调用的时候触发。这个阶段会触发一系列的流程，按执行顺序如下：  
*　* （1） `constructor`：需要在构造方法中最先调用`super(props)`，可以在此初始化state。  
*　* （2） `componentWillMount`:它在render方法前被执行，因此，在componentWillMount方法中设置state并不会导致重新被渲染，它只会被执行一次。   
*　* （3） `render`：该方法是必须的，生成页面需要的虚拟 DOM 结构，render方法中不应该修改组件的props和state。  
*　* （4） `componentDidMount`：对根据虚拟 DOM 结构而生的真实 DOM 进行相应的处理。组件内部可以通过 `ReactDOM.findDOMNode(this)` 来获取当前组件的节点，然后就可以像 Web 开发中那样操作里面的 DOM 元素了。  
> state：
它是用来存储组件自身需要的数据。它是可以改变的，它的每次改变都会引发组件的更新。
即每次数据的更新都是通过`setState()`方法修改 state 属性的值，state 一旦发生变化，就会触发组件的 render 方法来更新 DOM 结构。

## 2.更新(Updating)阶段
改变props或者state时可以导致更新，当一个组件被重新渲染时，会调用如下方法:

*　* （1） `componentWillReceiveProps(nextProps)`：当组件接收到新的 props 时，会触发该函数。在该函数中，通常可以调用 this.setState 方法来完成对 state 的修改。  
*　* （2） `shouldComponentUpdate(nextProps, nextState)`：当组件接收到新的props和state时，shouldComponentUpdate方法被调用，它接收两个Object参数，nextProps是新的props，nextState是新的state。shouldComponentUpdate方法默认返回true。  你也可以重载这个方法，通过检查变化前后props和state，来决定组件是否需要重新渲染。如果返回false，则组件不会被重新渲染，也不会调用本方法后面的componentWillUpdate和componentDidUpdate方法。   
*　* （3） `componentWillUpdate(nextProps, nextState)`：如果组件props或者state改变，并且此前的shouldComponentUpdate方法返回为 true，则会调用该方法。componentWillUpdate方法会在组件重新渲染前被调用，因此，可以在这个方法中为重新渲染做一些准备工作。需要注意的是，在这个方法中，不能使用 this.setState 来更改state。  
*　* （4） `componentDidUpdate(prevProps, prevState)`：该方法在组件的更新已经同步到 DOM 中去后触发，我们常在该方法中做 DOM 操作。  

## 3.卸载(Unmounting)阶段
* 这个阶段只会触发一个叫 `componentWillUnmount` 的方法。
* 当组件需要从 DOM 中移除的时候，我们通常会做一些取消事件绑定、移除虚拟 DOM 中对应的组件数据结构、销毁一些无效的定时器等工作。这些事情都可以在这个方法中处理。

一个包含所有生命周期函数的组件
```js
class Demo extends Component{
    /*1.挂载(Mounting)阶段*/
    constructor(props) {
        super(props);
        console.log("constructor");
        /* 给state赋初始值*/
        this.state = {
            text: 'Lifecycle'
        };
    }

    //组件将要加载，在render之前调用此方法
    componentWillMount() {
        console.log("componentWillMount");
    }
    //渲染并返回一个虚拟DOM
    render() {
        console.log("render");
        return (<div> 
                <p>{this.state.text}</p>
                <p>{this.props.date}</p>
            </div>
        );
    }
    //组件完成加载，在render之后调用此方法
    componentDidMount() {
        //在该方法中，React会使用render方法返回的虚拟DOM对象来创建真实的DOM结构
        console.log("componentDidMount");
        var node = ReactDOM.findDOMNode(this);
        console.log(node);
    }

    /* 2.更新(Updating)阶段 */
    //该方法发生在this.props被修改或父组件调用setProps()方法之后
    componentWillReceiveProps(nextProps) {
        console.log("componentWillRecieveProps");
    }
    //是否需要更新
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
        return true;
    }
    //将要更新
    componentWillUpdate() {
        console.log("componentWillUpdate");
    }
    //更新完毕
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    /* 3.卸载(Unmounting)阶段 */
    //销毁时会被调用
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
}
```
调用上面定义的组件([demo](/demo/lifecycle))
```js
  class Lifecycle extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isMounted: false,
            date:''
        };
    }
    shouldComponentUpdate(nextProps, nextState) {
        return this.state.isMounted !== nextState.isMounted || this.state.date !== nextState.date;
    }
    Mounting = ()=>{
        this.setState({
            isMounted: true
        })
    }
    Updating = ()=>{
        this.setState({
            date: 'Now time is ' + new Date().toLocaleTimeString()
        })
    }
    Unmounting = ()=>{
        this.setState({
            isMounted: false
        })
    }
    render(){
        return (
            <div>
                <button onClick={this.Mounting}>挂载(Mounting)</button>
                <button onClick={this.Updating}>更新(Updating)</button>
                <button onClick={this.Unmounting}>卸载(Unmounting)</button>
                {this.state.isMounted ? <Demo date={this.state.date}/> : ''}
            </div>
            )
    }
```

