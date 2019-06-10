import React, { Component } from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator, TabBarIconProps } from 'react-navigation'
import { ufontSize, uwidth } from '../../utils/UiUtils'
import { HomePage } from '../main/HomePage'
import { UserPage } from '../user/UserPage'

export const MainRouter = createBottomTabNavigator({
  HomePage: { 
    screen: HomePage,
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon: (tabBarIconProps: TabBarIconProps) => (
        <Image 
          source={require('../../data/img/home.png')} 
          style={{ width: uwidth(24), height: uwidth(24) , resizeMode: 'contain', tintColor: tabBarIconProps.tintColor! }}
        />
      )
    }
  },
  UserPage: { 
    screen: UserPage,
    navigationOptions: {
      tabBarLabel: '个人',
      tabBarIcon: (tabBarIconProps: TabBarIconProps) => (
        <Image 
          source={require('../../data/img/user.png')} 
          style={{ width: uwidth(24), height: uwidth(24) , resizeMode: 'contain', tintColor: tabBarIconProps.tintColor! }}
        />
      )
    }
  }
}, {
  backBehavior: 'initialRoute',
  tabBarOptions: {
    activeTintColor: '#1ABC8C',
    inactiveTintColor: '#949494',
    labelStyle: {
      fontSize: ufontSize(13),
      fontWeight: 'bold'
    }
  }
  // tabBarComponent: (props) => <TabHomeBar {...props}/>,
})
