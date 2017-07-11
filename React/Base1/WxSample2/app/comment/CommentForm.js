/**
 * Created by wangxuan on 2017/7/10.
 */

'use strict';

import React from 'react';

class CommentForm extends React.Component {

    handleSubmit(event) {
        event.preventDefault();
        let author = this.refs.author.value;
        let text = this.refs.text.value;

        this.props.onCommentSubmit({author,text,date:"刚才"});
    }

    render() {
        return (
            <form className="ui reply form" onSubmit={this.handleSubmit.bind(this)}>
                <div className="field">
                    <input type="text" placeholder="姓名" ref="author"/>
                </div>
                <div className="field">
                    <textarea placeholder="评论" ref="text"></textarea>
                </div>
                <button type="submit" className="ui blue button">
                    添加评论
                </button>
            </form>
        );
    }
}

export {CommentForm as default}