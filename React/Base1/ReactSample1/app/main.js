/**
 * Created by wangxuan on 2017/8/7.
 */
import React from 'react'
import ReactDom from 'react-dom'

import MyButtonController from './component/flux/MyButtonController'

ReactDom.render(
    /*<h1>大家好</h1>,*/
    <MyButtonController/>,
    document.getElementById("app")
)