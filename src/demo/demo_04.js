/**
 * Created by lihuima on 2017/7/18.
 * lists-and-keys
 * https://facebook.github.io/react/docs/lists-and-keys.html
 */
import React , { Component } from 'react';

export class ItemList extends Component {
    constructor(props){
        super(props);
        const numbers = [1,2,3,4];
        this.listItems = numbers.map( number => <li key={number.toString()}>{number}</li>)
    }
    render() {
        return (
            <ul>{this.listItems}</ul>
        )
    }
}