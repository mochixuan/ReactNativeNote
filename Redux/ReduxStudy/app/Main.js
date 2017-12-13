import React,{Component} from 'react'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import LoginPage from './component/LoginPage'

const {persistor,store} = configureStore()

export default class Main extends Component {

    render() {
        return (
            <Provider store={store}>
                <LoginPage/>
            </Provider>
        )
    }

}