# 组件
组件允许你将UI拆分成独立的、可复用的片段。

## Example1 [#](/demo/message)

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

## props
`this.props`对象的属性与组件的属性一一对应, 是一个只读对象，我们不能去改变props的值。
> 有一个例外，就是 this.props.children 属性,它表示组件的所有子节点

## Example2 [#](/demo/clock)
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
## state
React的组件都有自己的状态，这个内部状态使用state表示。通过调用`setState()`来改变`this.state`的值。