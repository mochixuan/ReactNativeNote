import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

/*exact在/里时取消/为默认*/

const RouterDm1 = () => (
    <Router>
        <div>
            <ul>
                <li style={base}><Link to="/">Home</Link></li>
                <li style={base}><Link to="/about">About</Link></li>
                <li style={base}><Link to="/topics">Topics</Link></li>
                <li style={base}><Link to="/user/wang/123">User</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/topics" component={Topics}/>
            <Route path="/user/:name/:password" component={User}/>
        </div>
    </Router>
)

const Home = React.createClass({
    render() {
        return (
            <h2>Home</h2>
        )
    }
});

const About = React.createClass({
    render() {
        return (
            <h2>About</h2>
        )
    }
})

const Topics = React.createClass({
    render() {
        return (
            <h2>Topics</h2>
        )
    }
})

const User = React.createClass({

    render() {
        let username = this.props.match.params.name;
        username = (username==null?"null":username)
        let password = this.props.match.params.password;
        password = (password==null?"null":password)
        return (
            <div>
                <h2>Topics</h2>
                <p>username={username}</p>
                <p>password={password}</p>
            </div>
        )
    }
})

let base = {
    backgroundColor: 'blue',
    color:'white',
    fontSize:40,
    alignItems:'center',
    textAlign:'center',
    margin:10,
    padding:10,
    listStyle: 'none',
    textDecoration: 'none',
}

export default RouterDm1