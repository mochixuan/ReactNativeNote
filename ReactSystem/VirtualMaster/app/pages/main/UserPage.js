import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native'
import {SwitchNavigator} from 'react-navigation'
import {min_icon} from '../../base/BaseStyle'

export default class UserPage extends Component {

    static navigationOptions = {
        tabBarLabel: "我的",
        tabBarIcon: ({tintColor}) => (
            <Image
                style={[min_icon,{tintColor}]}
                source={require('../../data/img/user.png')}
            />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>UserPage</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})