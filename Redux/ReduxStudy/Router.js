import React,{Component} from 'react'
import {StackNavigator} from 'react-navigation'
import LoginPage from "./app/component/LoginPage";
import MainPage from "./app/component/MainPage";

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