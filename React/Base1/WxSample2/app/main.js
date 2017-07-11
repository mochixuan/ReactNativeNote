'use strict';

import 'semantic-ui/semantic.min.css!'

import React from 'react';
import ReactDom from 'react-dom';
import CommentBox from './comment/CommentBox';
import {Router,Route,Link,IndexRoute} from 'react-router'


class App extends React.Component {
    render() {
        return (
            <div>
                <div className="ui secondary pointing menu">
                    <Link to='/' className="item">首页</Link>
                    <Link to='/v/tv' className="item">电视</Link>
                    <Link to='/v/movie' className="item">电影</Link>
                </div>
                {this.props.children}
            </div>
        );
    }
}

class TV extends React.Component {
    render() {
        return (
            <div>
                <div className="ui info message">电视节目列表</div>
                {this.props.children}
            </div>
        );
    }
}

class MOVIE extends React.Component {
    render() {
        return (
            <div>
                <div className="ui info message">电影节目列表</div>
                {this.props.children}
            </div>
        );
    }
}

class Show extends React.Component {

    render() {
        return (
            <h3>节目{this.props.params.id}</h3>
        );
    }
}

class Home extends React.Component {
    render() {
        return (
            <div className="ui info message">首页内容</div>
        );
    }
}

class ShowIndex extends React.Component {
    render() {
        return (
            <div className="ui info message">ShowIndex</div>
        );
    }
}

ReactDom.render((
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="v/tv" component={TV}>
                <IndexRoute component={ShowIndex}/>
                <Route path="shows/:id" component={Show}></Route>
            </Route>
            <Route path="v/movie" component={MOVIE}>
                <Route path="shows/:id" component={Show}></Route>
            </Route>
        </Route>
    </Router>
    ), document.getElementById('app'));




/*------------------------------------divide----------------------------------------------*/

/*var comments = [
    {"author":"莫辞","date":"5分钟","text":"深圳天天下雨"},
    {"author":"天涯","date":"6分钟","text":"办理深圳户口"}
];*/

/*
ReactDom.render(
    //<CommentBox data={comments}/>,
    <CommentBox url="app/comments.json"/>,
    document.getElementById('app')
);*/
