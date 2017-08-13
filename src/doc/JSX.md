# JSX
```js
const element = <h1>Hello, world!</h1>;
```
像这样将 HTML 语言直接写在 JavaScript 语言之中，这就是 JSX 的语法，它允许 HTML 与 JavaScript 的混写。
JSX 是一个看起来很像 XML 的 JavaScript 语法扩展。

## 在JSX中嵌入JS表达式
只需要用`{}`将JS表达式包起来
```js
const name = 'world';
const element = (
  <h1>
    Hello, {name}!
  </h1>
);
```
## JSX实质就是JS表达式
JSX实际上是语法糖,Babel通过调用`React.createElement()`来编译JSX。
下面两种写法是等价的
```js
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```
```js
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```
> **注意：**
> 在JSX中`class`属性应该用`className`替代