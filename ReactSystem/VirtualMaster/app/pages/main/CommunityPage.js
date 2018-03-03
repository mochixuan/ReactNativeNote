import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native'
import {min_icon} from '../../base/BaseStyle'

export default class CommunityPage extends Component {

    static navigationOptions = {
        tabBarLabel: "社区",
        tabBarIcon: ({tintColor}) => (
            <Image
                style={[min_icon,{tintColor}]}
                source={require('../../data/img/community.png')}
            />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>CommunityPage</Text>
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