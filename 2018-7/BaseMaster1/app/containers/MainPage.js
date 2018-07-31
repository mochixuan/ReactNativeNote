import React, {Component} from 'react'
import {Dimensions, StyleSheet, View} from 'react-native'
import {getButtonStyle} from "../base/BaseStyle";

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