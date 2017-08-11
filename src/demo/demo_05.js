/**
 * Created by lihuima on 2017/7/18.
 * forms
 * https://facebook.github.io/react/docs/forms.html
 */
import React , { Component } from 'react';
export class Forms extends Component {
    constructor(props){
        super(props);
        this.state = {
            value_1:'1',
            value_2:true,
            value_3:'banana',
            value_4:'',
        }
    }
    handleChange_1 = (e)=>{
        this.setState({
            value_1: e.target.value
        });
    };
    handleChange_2 = (e)=>{
        this.setState({
            value_2: e.target.checked
        });
    };
    handleChange_3 = (e)=>{
        this.setState({
            value_3: e.target.value
        });
    };
    handleChange_4 = (e)=>{
        this.setState({
            value_4: e.target.value.toUpperCase()
        });
    };
    handleSubmit = (e)=>{
        console.log('submit success!');
        e.preventDefault();
    };
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value_1} onChange={this.handleChange_1}/>
                <input type="checkbox" checked={this.state.value_2} onChange={this.handleChange_2}/>
                <select value={this.state.value_3} onChange={this.handleChange_3} name="" id="">
                    <option value='apple'>Apple</option>
                    <option value='banana'>Banana</option>
                    <option value='orange'>Orange</option>
                </select>
                <textarea value={this.state.value_4} onChange={this.handleChange_4} name="" id="" cols="20" rows="2"/>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}