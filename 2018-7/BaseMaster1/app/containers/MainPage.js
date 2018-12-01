import React, {Component} from 'react'
import {Dimensions, StyleSheet, View} from 'react-native'
import {getButtonStyle} from "../base/BaseStyle";
import LayoutAnimatePage from "./LayoutAnimatePage";
import WebViewPage from "./WebViewPage";

const {width,height} = Dimensions.get('window')

export default class MainPage extends Component{

    render() {
        return (
            <View style={styles.container}>
                {
                    getButtonStyle('WidgetPage',()=>{
                        this.props.navigation.navigate('WidgetPage')
                    })
                }
                {
                    getButtonStyle('LifeCyclePage',()=>{
                        this.props.navigation.navigate('LifeCyclePage')
                    })
                }
                {
                    getButtonStyle('AnimatablePage',()=>{
                        this.props.navigation.navigate('AnimatablePage')
                    })
                }
                {
                    getButtonStyle('SortPage',()=>{
                        this.props.navigation.navigate('SortPage')
                    })
                }
                {
                    getButtonStyle('PopupPage',()=>{
                        this.props.navigation.navigate('PopupPage')
                    })
                }
                {
                    getButtonStyle('LayoutAnimatePage',()=>{
                        this.props.navigation.navigate('LayoutAnimatePage')
                    })
                }
                {
                    getButtonStyle('WebViewPage',()=>{
                        this.props.navigation.navigate('WebViewPage')
                    })
                }
                {
                    getButtonStyle('QRCodePage',()=>{
                        this.props.navigation.navigate('QRCodePage')
                    })
                }
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
})
