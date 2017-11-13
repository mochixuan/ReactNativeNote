import React, { Component } from 'react';
import Test from './app/Test'
import {
    View,
    Text,
    Image,
    Dimensions,
} from 'react-native'
import TouchableView from 'react-native-mochixuan-test'
import ViewControl from 'react-native-zoom-view'

const {width,height} = Dimensions.get('window')

export default class App extends Component<{}> {
  render() {
    return (
        <View style={{
            flex:1,
            justifyContent: 'center',
            alignItems:'center',
        }}>
          {/*<TouchableView>
              <View>
                <Text style={{
                    width:100,
                    height:60,
                }}>
                  大家好
                </Text>
              </View>
          </TouchableView>*/}
          <ViewControl
                cropWidth={width}
                cropHeight={height}
                imageWidth={200}
                imageHeight={200}>
                <Image
                    style={{
                        width: 200,
                        height: 200,
                    }}
                    source={{
                        uri: 'http://img1.ph.126.net/u1dVCkMgF8qSqqQLXlBFQg==/6631395420169075600.jpg'
                    }}
                />
          </ViewControl>
        </View>

    );
  }
}

