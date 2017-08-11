/**
 * Created by lihuima on 2017/7/17.
 * events
 * https://facebook.github.io/react/docs/handling-events.html
 */
import React , { Component } from 'react';
class Toggle extends Component {
    constructor(props){
        super(props);
        this.state = {
            toggle:true
        };
        //如果不使用箭头函数，则需要bind this
        // this.handleClick = this.handleClick.bind(this);
    }
    handleClick = () => {
        this.setState(preState => ({
            toggle:!preState.toggle
        }));
    };
    render(){
        return (
            <button onClick={this.handleClick}>{this.state.toggle?'ON':'OFF'}</button>
        )
    }
}
export { Toggle };