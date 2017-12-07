/**
 * Created by wangxuan on 2017/8/7.
 */
import React from 'react'
import ReactDom from 'react-dom'

//1 flux
import MyButtonController from './component/flux/MyButtonController'

//2 redux
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import todoApp from './component/redux/reduces'
import App from './component/redux/component/App'
let store = createStore(todoApp)

//3. router
import RouterDm1 from './component/router/RouterDm1'

ReactDom.render(
    /*<h1>大家好</h1>,*/
    //1.flux
    //<MyButtonController/>,

    //2.redux
    <Provider store={store}>
        <App/>
    </Provider>

    //3. router
    /*<RouterDm1/>*/
    ,
    document.getElementById("app")
)