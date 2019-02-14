import React,{Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    Animated,
    Easing
} from 'react-native'
const {width} = Dimensions.get('window')
// import RootSiblings from 'react-native-root-siblings'
import SnackView from "./SnackView"

let mRoot = null
let mRootSiblings = []
export default class SnackBar {

    static show = (text,duration,opacity) => {
        // mRoot = new RootSiblings(
        //      <SnackView
        //         message = {text}
        //         duration = {duration}
        //         opacity = {opacity}
        //      />
        //  )
    }

    static hide = () => {
        // if (mRoot != null) {
        //     mRoot.destroy()
        // }
    }

    static showAndHideOld = (text,duration,opacity) => {
        // this.hide()
        // this.show(text,duration,opacity)
    }

}

