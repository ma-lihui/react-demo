# 组件
组件允许你将UI拆分成独立的、可复用的片段。它就像函数一样，接受一些输入（props），返回React element。

## 定义组件
我们有两种方法定义组件:
* 用函数定义组件
```js
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
```
* 用class定义组件
```js
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}
```
```js
ReactDOM.render(
    <Welcome name="John" />,
    document.getElementById('root')
);
```
上面代码中， `Welcome` 就是一个组件类。
模板插入 `<Welcome />` 时，会自动生成 Welcome 的一个实例。

## props
this.props 是一个只读对象，我们不能去改变props的值。

