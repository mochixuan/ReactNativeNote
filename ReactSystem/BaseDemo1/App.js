import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {StackNavigator} from 'react-navigation'
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator'
import Main from "./app/Main";
import PermissionAndroidView from "./app/components/PermissionAndroidView";
import NotificationView from "./app/components/NotificationView";

const App = StackNavigator({
    Main: {screen: Main},
    PermissionAndroidView: {screen: PermissionAndroidView},
    NotificationView: {screen: NotificationView}
},{
  navigationOptions: {
    gesturesEnabled: true,
  },
    headerMode: "none",
    transitionConfig:(()=>({
        //暂时不支持
        //screenInterpolator: CardStackStyleInterpolator.forHorizontal()
    }))
})

export default App



