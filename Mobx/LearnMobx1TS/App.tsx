import { Provider } from 'mobx-react';
import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import MainPage from './app/containers/MainPage';
import store from './app/store';
import TodoPage from './app/todo/pages/TodoPage';
<<<<<<< HEAD

=======
>>>>>>> 4d4b5dc951c9a1f49b8d3c77dae0277e1dddf12e

import {
    Text,
    View
} from 'react-native';

const AppComponent = createStackNavigator({
  MainPage: { screen: MainPage },
  TodoPage: { screen: TodoPage }
}, {
<<<<<<< HEAD
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
=======
  navigationOptions: {
    gesturesEnabled: true
  },
  headerMode: 'none'
});

const App = () => {
  return (
        <Provider {...store}>
            <AppComponent />
        </Provider>
  );
>>>>>>> 4d4b5dc951c9a1f49b8d3c77dae0277e1dddf12e
};

export default App;
