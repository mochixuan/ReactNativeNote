import React, { Component } from 'react'
import {
  SafeAreaView, Text, View
} from 'react-native'
import { iPhoneXBaseHeaderView } from '../../styles/baseView'

class DetailPage extends Component {

  public render () {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        {iPhoneXBaseHeaderView}
        <View>
          <Text>detail</Text>
        </View>
      </SafeAreaView>
    )
  }
  
}

export { DetailPage }
