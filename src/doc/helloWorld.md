# Hello world  

ReactDOM.render 是 React 的最基本方法，用于将模板转为 HTML 语言，并插入指定的 DOM 节点。

example [#](/demo/helloWorld)
```js
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```

上面代码将一个 `h1` 标题，插入 `root` 节点
