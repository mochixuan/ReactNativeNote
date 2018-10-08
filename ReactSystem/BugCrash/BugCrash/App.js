/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import {Sentry} from 'react-native-sentry'

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button,TouchableOpacity} from 'react-native';
import BugComponent from './BugComponent'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
const SENTRY_KEY = "https://2010cd111b514e77be8fcb41ce8bad5c@sentry.io/1283796"

export default class App extends Component<Props> {

  componentWillMount() {
    // Sentry.config(SENTRY_KEY)
    //     .install()
    //     .then(()=>{
    //       //console.warn(0)
    //     }).catch((error)=>{
    //       //console.warn(1)
    //     })

  }

  constructor(props) {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <TouchableOpacity onPress={()=>{
            this.props.userName.wangxuan = 10;
        }}>
          <Text style={{padding: 10,backgroundColor: '#ff6772',color: '#000'}}>Parent Bug</Text>
        </TouchableOpacity>
        <BugComponent/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
