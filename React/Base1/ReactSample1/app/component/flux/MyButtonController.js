/**
 * Created by wangxuan on 2017/8/7.
 */
var React = require('react');
var ListStore = require('./ListStore');
var ButtonActions = require('./ButtonActions');
var MyButton = require('./MyButton');

var MyButtonController = React.createClass({
    getInitialState: function () {
        return {
            items: ListStore.getAll()
        };
    },

    componentDidMount: function() {
        ListStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        ListStore.removeChangeListener(this._onChange);
    },

    _onChange: function () {
        this.setState({
            items: ListStore.getAll()
        });
    },

    createNewItem: function (event) {
        ButtonActions.addNewItem('new item');
    },

    render: function() {
        return <MyButton
            items={this.state.items}
            onClick={this.createNewItem}
        />;
    }

});

module.exports = MyButtonController;