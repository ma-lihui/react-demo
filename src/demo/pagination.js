import React,{Component} from 'react';

export default class Pagination extends Component{
    constructor(props){
        super(props);
        this.state = {
            current:1
        }
    }

    goPage(page){
        this.setState({
            current: page
        });
    }
    render(){
        return <ul></ul>
    }
}