/**
 * Created by wangxuan on 2017/8/7.
 */

var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();
var ListStore = require('./ListStore')

AppDispatcher.register(function (action) {
    switch (action.actionType) {
        case 'ADD_NEW_ITEM':
            ListStore.addNewItemHandler(action.text)
            ListStore.emitChange()
            break
        default:
            break
    }
})

module.exports = AppDispatcher;