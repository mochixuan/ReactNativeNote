import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ListViewComponent from './ListViewComponent';

export default class WxSample3 extends Component {

  render() {
    return (
      <View>
        <ListViewComponent/>
      </View>
    );
  }
}


AppRegistry.registerComponent('WxSample3', () => WxSample3);
