import React from 'react'
import { Image, ImageSourcePropType, Platform, StyleSheet, View } from 'react-native'
import { iosStatusBarHeight, iosStatusBarXHeight, isIphoneX, uwidth } from '../utils/UiUtils'

export const separatorHeight = uwidth(2)

export const renderSeparatorView = (): any => {
  return <View style={{ backgroundColor: '#ebebeb' , height: separatorHeight }}/>
}

const xBaseHeadView = <View style={{ position: 'absolute', top: 0, width: '100%', height: isIphoneX() ? iosStatusBarXHeight : iosStatusBarHeight, backgroundColor: '#1ABC8C' }}/>

export const iPhoneXBaseHeaderView = (Platform.OS === 'ios') ? xBaseHeadView : undefined
