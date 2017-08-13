/**
 * Created by lihuima on 2017/7/17.
 * 组件、props的用法
 */
import React, { Component } from 'react';
import head from '../image/head/react.ico'
class Demo extends Component{
    render() {
        return (
            <div className="Message" style={{border:'1px solid #eee',borderRadius:'3px',padding:'10px'}}>
                <div className="UserInfo">
                    <img className="Avatar"
                         src={head}
                         style={{width:'40px',marginRight:'10px',float:'left'}}
                    />
                    <div className="UserInfo-name">{this.props.message.author.name}</div>
                    <div style={{color:'#ccc',fontSize:'0.6em'}}>{this.props.message.date}</div>
                </div>
                <div className="Message-text">
                    {this.props.message.text}
                </div>
            </div>
        );
    }
}
export default class Message extends Component{

    render() {
        const message = {
            date:new Date().toLocaleTimeString(),
            text:'React is flexible and can be used in a variety of projects. You can create new apps with it, but you can also gradually introduce it into an existing codebase without doing a rewrite.',
            author:{
                name:'Tom'
            }
        };
        return (
            <Demo message={message}/>
        );
    }
}
