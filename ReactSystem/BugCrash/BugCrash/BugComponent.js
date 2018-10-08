import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native'

export default class BugComponent extends Component{

    render() {
        return (
            <TouchableOpacity style={{marginTop: 10}} onPress={()=>{
                this.props.userName.wangxuan = 10;
            }}>
                <Text style={{padding: 10,backgroundColor: '#ff6772',color: '#000'}}>Children Bug</Text>
            </TouchableOpacity>
        )
    }

}