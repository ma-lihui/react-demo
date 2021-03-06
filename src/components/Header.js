/**
 * Created by lihuima on 2017/7/21.
 */
import React,{ Component } from 'react';
import '../css/header.css'
import logo from '../logo.svg';
import { Link, NavLink } from 'react-router-dom';
import { NAV_HEADER } from'../constant'

export default class Header extends Component{

    render(){
        const { nav } = this.props;
        const navList = nav.map( n =>
            <li key={n.url}>
                <NavLink exact={n.exact} to={n.url}>{n.name}</NavLink>
            </li>
        );
        return (
            <div className="header">
                <header className="Nav-header">
                    <Link to={NAV_HEADER[0].url} className="Nav-brand">
                        <img src={logo} className="Nav-logo" alt="logo" />
                        <span className="Nav-brand-name">react</span>
                    </Link>
                    <ul className="Nav-row">
                        { navList }
                    </ul>
                </header>
            </div>
        );
    }
}