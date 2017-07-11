/**
 * Created by wangxuan on 2017/7/10.
 */
'use strict'

import React from 'react';

class Comment extends React.Component {
    render() {
        return (
            <div className="comment">
                <div className="content">
                    <span className="author">{this.props.author}</span>
                    <div className="metadata">
                        <span className="date">{this.props.data}</span>
                    </div>
                </div>
                <div className="text">{this.props.children}</div>
            </div>
        );
    }
}

export {Comment as default};