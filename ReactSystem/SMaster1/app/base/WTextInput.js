/**
 * Created by wangxuan on 2017/7/15.
 */
import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
} from 'react-native'

export default class WTextInput extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: 'a'
        }
    }

    render() {
        return (
            <View style={{
                padding: 10,
            }}>
                <TextInput style={{
                    height: 40,
                }}
                           placeholder='please input content'
                           onChangeText={(text) => {
                               this.setState({
                                   data: text
                               })
                           }}
                />
                <Text style={{
                    color: '#456789',
                    fontSize: 30,
                    alignSelf: 'center'
                }}>{this.state.data}</Text>
                <Text style={{
                    color: '#fe4321',
                    fontSize: 30,
                    alignSelf: 'center'
                }}>  {
                    this.state.data
                        .split(' ')
                        .map((word)=>word && '🍕').join(' ')
                }</Text>
            </View>
        )
    }

}