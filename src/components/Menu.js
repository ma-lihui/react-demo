/**
 * Created by lihuima on 2017/7/21.
 */
import React,{ Component } from 'react';
import '../css/main.css'
import { NavLink } from 'react-router-dom';

export default class Menu extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const { menuList, preUrl, match } = this.props;
        this.menuList = menuList.map( menu =>
            <li key={menu.url}>
                <NavLink exact={menu.exact} to={preUrl + menu.url}>{menu.name}<span className="subname">{menu.subname}</span></NavLink>
            </li>
        );
        return (
            <div className="Menu">
                <ul className="Nav-row">
                    { this.menuList }
                </ul>
            </div>
        );
    }
}