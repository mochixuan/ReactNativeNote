import React , { Component } from 'react'
import {
  StyleSheet, Text, View
} from 'react-native'
import { createAppContainer, createMaterialTopTabNavigator, createNavigationContainer, NavigationScreenProp } from 'react-navigation'

interface IProps {
  title: string
}

class ItemView extends React.Component<IProps, any> {

  public render () {
    return (
      <View style={{ flex: 1 , justifyContent: 'center', alignItems: 'center' }}>
        <Text>{this.props.title ? '' : 'Home'}</Text>
      </View>
    )
  }

}

const ItemTopTar = createAppContainer(
  createMaterialTopTabNavigator({
    Tab1: { screen: ItemView },
    Tab2: { screen:  ItemView },
    Tab3: { screen:  ItemView },
    Tab4: { screen:  ItemView },
    Tab5: { screen:  ItemView }
  }, {
    initialRouteName: 'Tab1'
  })
)

export { ItemTopTar }
