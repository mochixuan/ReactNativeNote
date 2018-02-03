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
import JNotificationView from "./app/components/JNotificationView";
import FileDownView from "./app/components/FileDownView";
import NativeMethodView from "./app/components/NativeMethodView";
import ShareView from "./app/components/ShareView";
import ScreenShotView from "./app/components/ScreenShotView";
import AlertView from "./app/components/AlertView";

const App = StackNavigator({
    Main: {screen: Main},
    PermissionAndroidView: {screen: PermissionAndroidView},
    NotificationView: {screen: NotificationView},
    JNotificationView: {screen: JNotificationView},
    FileDownView: {screen: FileDownView},
    NativeMethodView: {screen:NativeMethodView},
    ShareView: {screen: ShareView},
    ScreenShotView: {screen: ScreenShotView},
    AlertView: {screen: AlertView},
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



