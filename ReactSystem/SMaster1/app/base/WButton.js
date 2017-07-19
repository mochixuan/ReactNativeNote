/**
 * Created by wangxuan on 2017/7/18.
 */

import React,{Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native'

export default class WButton extends Component {

    constructor(props) {
        super(props)
        this.state = {
            button1: 'Button'
        }
    }

    render() {
        return(
            <View style={{
                margin: 10,
                alignItems: 'center'
            }}>

                <TouchableHighlight onPress={
                    this._onPressButton
                }>
                    <Image
                        style={{
                            width: 100,
                            height: 80,
                        }}
                        source={require('../img/a8.png')}
                    />
                </TouchableHighlight>

                <TouchableNativeFeedback
                    onPress={this._onPressButton}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View style={{width: 150, height: 100, backgroundColor: 'red'}}>
                        <Text style={{margin: 30}}>Button</Text>
                    </View>
                </TouchableNativeFeedback>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    button: {
        fontSize: 18,
        height: 60,
        backgroundColor: '#008b8b',
        alignSelf: 'center',
        padding:10,
        color: '#f5f5f5',
        fontWeight: 'bold',
        margin:12,
        borderColor: '#99456789',
        borderRadius: 8,
        borderWidth: 4,
    }
})