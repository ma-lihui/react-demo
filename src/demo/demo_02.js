/**
 * Created by lihuima on 2017/7/17.
 * state的用法
 */
import React,{Component} from 'react';

class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {
            date:new Date()
        }
    }
    componentDidMount() {
        this.timeId = setInterval(
            () => this.tick(),
            1000);
    }
    componentWillUnmount(){
        clearInterval(this.timeId);
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }
    render(){
        return <p>{this.state.date.toLocaleTimeString()}</p>
    }
}
export { Clock };