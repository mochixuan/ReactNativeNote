import React, { Component } from 'react';
import Test from './app/Test'
import {
    View,
    Text,
} from 'react-native'
import TouchableView from 'react-native-mochixuan-test'

export default class App extends Component<{}> {
  render() {
    return (
        <View style={{
            flex:1,
            justifyContent: 'center',
            alignItems:'center',
        }}>
          <TouchableView>
              <View>
                <Text style={{
                    width:100,
                    height:60,
                }}>
                  大家好
                </Text>
              </View>
          </TouchableView>
        </View>

    );
  }
}

