import React,{Component} from 'react'
import {StackNavigator} from 'react-navigation'
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator'
import MainPage from './pages/main/MainPage'

const Router = StackNavigator({
    MainPage: {screen: MainPage}
},{
    navigationOptions: {
        gesturesEnabled: true
    },
    headerMode: 'none',
    transitionConfig: (()=>({
        screenInterpolator: CardStackStyleInterpolator.forHorizontal
    }))
})

export default Router