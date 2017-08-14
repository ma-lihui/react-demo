/**
 * Created by lihuima on 2017/7/17.
 * 组件、props的用法
 */
import React, { Component } from 'react';

class Comment extends Component{
    render() {
        const comment = {
            date:new Date().toLocaleDateString(),
            text:'hello',
            author:{
                name:'Tom'
            }
        };
        return (
            <div className="Comment">
                <div className="UserInfo">
                    <div className="UserInfo-name">{comment.author.name}</div>
                </div>
                <div className="Comment-text">
                    {comment.text}
                </div>
                <div className="Comment-date">
                    {comment.date}
                </div>
            </div>
        );
    }
}
export  { Comment };