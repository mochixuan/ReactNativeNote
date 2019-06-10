import React, { Component } from 'react'
import { SafeAreaView } from 'react-native'
import { iPhoneXBaseHeaderView } from '../../styles/baseView'
import { ItemTopTar } from './ItemView'

class UserPage extends Component {

  public render () {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        {iPhoneXBaseHeaderView}
        <ItemTopTar/>
      </SafeAreaView>
    )
  }
  
}

export { UserPage }
