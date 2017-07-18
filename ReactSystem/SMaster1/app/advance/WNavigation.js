/**
 * Created by wangxuan on 2017/7/18.
 */

import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native'
import {
    StackNavigator
} from 'react-navigation'

const App = StackNavigator({
    Main: {screen: MainScreen},
    Profile: {screen: ProfileScreen}
})

class MainScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
    }

    render() {
        const {navigate} = this.props.navigation

        return(
            <Button
                title='Go to Jane profile'
                onPress={() => {
                    navigate('Profile',{name: 'Jane'})
                }}
            />
        )
    }

}