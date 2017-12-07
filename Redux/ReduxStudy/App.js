import React, { Component } from 'react';

import {StackNavigator} from 'react-navigation'
import Main from "./app/Main";

const App = StackNavigator({
    Main: {screen: Main}
},{
  navigationOptions: {
    gesturesEnabled: true
  },
    headerMode: 'none',
})

export default App



