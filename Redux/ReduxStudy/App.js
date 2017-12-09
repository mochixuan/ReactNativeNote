import React, { Component } from 'react';
import {Provider} from 'react-redux'
import configureStore from './app/store/configureStore'
import AppWithNavigationState from './AppWithNavigationState'

const store = configureStore()

export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState/>
            </Provider>
        )
    }

}



