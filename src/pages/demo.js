import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Menu from '../components/Menu'
import { DEMO_MENU } from '../constant'
import HelloWorld from '../demo/helloWorld'
import { Clock } from '../demo/demo_02'
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
                    <Route path={`${match.url}/demo2`} component={Clock}/>
                    <Route path={`${match.url}/demo3`} component={Clock}/>
                </div>
            </div>
        );
    }
}
