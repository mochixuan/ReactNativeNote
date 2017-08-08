/**
 * Created by wangxuan on 2017/8/7.
 */
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ListStore = assign({},EventEmitter.prototype,{

    items: [],

    getAll: function () {
        return this.items;
    },

    addNewItemHandler: function (text) {
        this.items.push(text)
    },

    /*用来发出一个"change"事件*/
    emitChange: function () {
        this.emit('change')
    },

    /*监听change事件*/
    addChangeListener: function (callback) {
        this.on('change',callback)
    },

    /*移除 change 时触发 callback*/
    removeChangeListenr: function (callback) {
        this.removeListener('change',callback);
    }

});

module.exports = ListStore;