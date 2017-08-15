import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Menu from '../components/Menu'
import { DEMO_MENU } from '../constant'
import HelloWorld from '../demo/helloWorld'
import Message from '../demo/message'
import Lifecycle from '../demo/lifecycle'
import Clock from '../demo/clock'
export default class Demo extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {match} = this.props;
        return (
            <div className="main">
                <Menu menuList={ DEMO_MENU } preUrl={this.props.match.url}/>
                <div className="content">
                    <Route path={`${match.url}/helloWorld`} component={HelloWorld}/>
                    <Route path={`${match.url}/message`} component={Message}/>
                    <Route path={`${match.url}/lifecycle`} component={Lifecycle}/>
                    <Route path={`${match.url}/clock`} component={Clock}/>
                </div>
            </div>
        );
    }
}
