import React,{Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'

export default class MainPage extends Component {
    render () {
        return (
            <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}>
                <Text>{'姓名: '+this.props.navigation.state.params.user.name + '\n年龄: '+this.props.navigation.state.params.user.age}</Text>
            </View>
        )
    }
}