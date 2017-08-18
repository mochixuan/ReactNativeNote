/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React,{Component} from 'react'
import {
    AppRegistry,
    NativeModules,
} from 'react-native';
import App from './app/app'

class Android extends Component {

    componentDidMount() {
        let splashScreen = NativeModules.SplashScreen;
        splashScreen.hide();
    }

    render() {
        return(
            <App/>
        )
    }

}

AppRegistry.registerComponent('WidgetMaster', () => Android);
