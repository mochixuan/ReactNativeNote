import React, { Component } from 'react';
import {Provider} from 'react-redux'
import configureStore from './app/store/configureStore'
import Route from './app/Router'
import { PersistGate } from 'redux-persist/es/integration/react'

const {persistor,store} = configureStore()

export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <PersistGate
                    persistor={persistor}>
                    <Route/>
                </PersistGate>
            </Provider>
        )
    }

}



