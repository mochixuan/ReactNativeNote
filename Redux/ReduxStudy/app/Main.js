import React,{Component} from 'react'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import {addNavigationHelpers} from 'react-navigation'
import LoginPage from './component/LoginPage'
import MainPage from './component/MainPage'

const store = configureStore()

export default class Main extends Component {

    render() {
        return (
            <Provider store={store}>
                <LoginPage/>
            </Provider>
        )
    }

}