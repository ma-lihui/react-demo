/**
 * Created by lihuima on 2017/7/17.
 * 组件、props的用法
 */
import React, { Component } from 'react';
import head from '../image/head/react.ico'
export default class Message extends Component{
    render() {
        const comment = {
            date:new Date().toLocaleDateString(),
            text:'React is flexible and can be used in a variety of projects. You can create new apps with it, but you can also gradually introduce it into an existing codebase without doing a rewrite.',
            author:{
                name:'Tom'
            }
        };
        return (
            <div className="Message" style={{border:'1px solid #eee',borderRadius:'3px',padding:'10px'}}>
                <div className="UserInfo">
                    <img className="Avatar"
                         src={head}
                         style={{width:'40px',marginRight:'10px',float:'left'}}
                    />
                    <div className="UserInfo-name">{comment.author.name}</div>
                    <div style={{color:'#ccc',fontSize:'0.6em'}}>{comment.date}</div>
                </div>
                <div className="Message-text">
                    {comment.text}
                </div>
            </div>
        );
    }
}
