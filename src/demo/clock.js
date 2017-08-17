/**
 * Created by lihuima on 2017/7/17.
 * state的用法
 */
import React,{Component} from 'react';

export default class Clock extends Component{
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
    componentWillUnmount(){
        clearInterval(this.timeId);
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
