/**
 * Created by wangxuan on 2017/7/30.
 */
import React,{Component} from 'react'
import {
    StyleSheet,
    Image,
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import {TabNavigator} from 'react-navigation'

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Home</Text>
            </View>
        )
    }
}

class Video extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Video</Text>
            </View>
        )
    }
}

class User extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>User</Text>
            </View>
        )
    }
}

const WNavigatorTab = TabNavigator({
    Home:{screen:Home},
    Video:{screen:Video},
    User:{screen:User}
})

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    touchable: {
        width: 140,
        height:60,
        margin:10,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:"#39b85a",
        borderRadius:4,
    },
    textTitle: {
        alignSelf: 'center',
        fontSize:24,
        color: '#333'
    },
    text: {
        color: '#f5f5f5',
        fontSize: 20,
    }
})

export default WNavigatorTab