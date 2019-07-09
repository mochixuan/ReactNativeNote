import React , {Component} from 'react'
import {
    View,Text,StyleSheet
} from 'react-native'

export class SettingPage extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Text>LoginPage</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        color: '#e040f0'
    }
})