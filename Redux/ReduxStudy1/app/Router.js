import React,{Component} from 'react'
import {StackNavigator} from 'react-navigation'
import LoginPage from "./component/LoginPage";
import MainPage from "./component/MainPage";

const Router = StackNavigator({
    LoginPage: {screen: LoginPage},
    MainPage: {screen: MainPage}
},{
    navigationOptions: {
        gesturesEnabled: true
    },
    headerMode: 'none',
})

export default Router