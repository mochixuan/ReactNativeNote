/**
 * Created by wangxuan on 2017/7/10.
 */

'use strict';

import React from 'react'
import Comment from './Comment'

class CommentList extends React.Component {
    render() {

        let commentNodes = this.props.data.map(comment => {
           return(
               <Comment author={comment.author} data={comment.date}>
                   {comment.text}
               </Comment>
           );
        });

        return (
            <div>
                {commentNodes}
            </div>
        );

        /*return (
            <div>
                <div>评论列表</div>
                <Comment author="莫" data="4分钟前">今天开始努力了</Comment>
                <Comment author="旋" data="5分钟前">深圳天天下雨</Comment>
            </div>
        );*/
    }
}

export {CommentList as default}