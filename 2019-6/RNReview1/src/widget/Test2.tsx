import React, { Component, PureComponent } from 'react'
import { Text, View } from 'react-native'

interface IPops {
  data: string
}

class Test2 extends PureComponent<IPops> {
  public render () {
    return (
      <View>
        <Text>{this.props.data}</Text>
       </View>
    )
  }
}

export { Test2 }
