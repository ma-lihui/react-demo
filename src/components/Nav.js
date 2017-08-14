/**
 * Created by lihuima on 2017/7/21.
 */
import React,{ Component } from 'react';
import '../css/Nav.css'
import logo from '../logo.svg';
import { Link, NavLink } from 'react-router-dom';

export class Nav extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const { nav } = this.props;
        const navList = nav.map( n =>
            <li key={n.url}>
                <NavLink exact={n.exact} to={n.url}>{n.name}</NavLink>
            </li>
        );
        return (
            <div className="Nav">
                <header className="Nav-header">
                    <Link to='/' className="Nav-brand">
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