import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native'
import {min_icon} from '../../base/BaseStyle'

export default class InformationPage extends Component {

    static navigationOptions = {
        tabBarLabel: "资讯",
        tabBarIcon: ({tintColor}) => (
            <Image
                style={[min_icon,{tintColor}]}
                source={require('../../data/img/information.png')}
            />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>InformationPage</Text>
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
})