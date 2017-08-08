/**
 * Created by wangxuan on 2017/8/7.
 */
var AppDispatcher = require('./AppDispatcher')

var ButtonActions = {

    addNewItem: function (text) {
        AppDispatcher.dispatch({
            actionType: 'ADD_NEW_ITEM',
            text: text,
        })
    }

}

module.exports = ButtonActions