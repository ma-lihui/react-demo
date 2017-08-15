import React, { Component } from 'react';
import ReactDOM, { findDOMNode } from "react-dom";
import head from '../image/head/react.ico'
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
export default class Lifecycle extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isMounted: false,
            date:'Now time is ' + new Date().toLocaleTimeString()
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
                {this.state.isMounted?<Demo date={this.state.date}/>:''}
            </div>
            )
    }
}
