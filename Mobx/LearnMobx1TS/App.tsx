import { Provider } from 'mobx-react';
import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import MainPage from './app/containers/MainPage';
import store from './app/store';
import TodoPage from './app/todo/pages/TodoPage';


import {
    Text,
    View
} from 'react-native';

const AppComponent = createStackNavigator({
    MainPage: { screen: MainPage },
    TodoPage: { screen: TodoPage },
}, {
        navigationOptions: {
            gesturesEnabled: true
        },
        headerMode: 'none',
    });

const App = () => {
    // web3.eth.getBlock('latest').then(console.log);
    return (
        <Provider {...store}>
            <AppComponent />
        </Provider>
    );
};

export default App;
