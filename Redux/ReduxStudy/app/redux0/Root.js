import React,{Component} from 'react'
import {Provider} from 'react-redux'
import configureStore from './store/ConfigureStore'

export default class Root extends Component {

    render() {
        return (
            <Provider store={configureStore}>
            </Provider>
        )
    }

}