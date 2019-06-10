import { Dimensions, PixelRatio, Platform } from 'react-native'

const IPHONEX_WIDTH = 375
const IPHONEX_HEIGHT = 812
const IPHONEX_MAX_WIDTH = 414
const IPHONEX_MAX_HEIGHT = 896

export const designUIWidth = 375
export const designUIHeight = 667
const defaultPixel = 2 // iphone6的像素密度

export const iosStatusBarHeight = 20
export const iosStatusBarXHeight = 44
export const iosBottomXHeight = 34

const screenW = Dimensions.get('window').width
export const screenH = Dimensions.get('window').height
const pixelRatio = PixelRatio.get()
const fontScale = PixelRatio.getFontScale()
const scale = Math.min(screenW / designUIWidth, screenH / designUIHeight)

// 判断是否iPhone x
export const isIphoneX = (): boolean => {
  if (Platform.OS === 'ios') {
    if (
        ((screenH === IPHONEX_HEIGHT && screenW === IPHONEX_WIDTH) || (screenH === IPHONEX_WIDTH && screenW === IPHONEX_HEIGHT)) ||  
        ((screenH === IPHONEX_MAX_HEIGHT && screenW === IPHONEX_MAX_WIDTH) || (screenH === IPHONEX_MAX_WIDTH && screenW === IPHONEX_MAX_HEIGHT))  
      ) {
      return true
    }
  }
  return false
}

export const uwidth = (size: number): number => {
  return (screenW * size) / designUIWidth
}

// 不要用
const uheight = (size: number): number => {
  return (screenH * size) / designUIHeight
}

export const ufontSize = (size: number): number => {
  return Math.round((size * scale) * pixelRatio / fontScale) / pixelRatio
}

export const modelHeaderHeight = 
  Platform.OS === 'android' ? 0 : 
  (isIphoneX() ? iosStatusBarXHeight : iosStatusBarHeight)

export const tabNoBarIphoneXPaddingBottom = isIphoneX() ? iosBottomXHeight : 0
