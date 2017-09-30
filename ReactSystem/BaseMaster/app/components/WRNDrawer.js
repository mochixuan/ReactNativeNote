import React,{Component} from 'react'
import {
    StyleSheet,
    Image,
    View,
    Text,
    TouchableOpacity,
} from 'react-native'

import Drawer from 'react-native-drawer'


class Home extends Component {
    static navigationOptions = {
        tabBarLabel:'Home',
        tabBarIcon:({tintColor}) =>(
            <Image
                style={{
                    width:26,
                    height:26,
                    tintColor:tintColor
                }}
                source={require('../img/e1.png')}
            />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Home</Text>
                <TouchableOpacity
                    style={styles.touchable}
                    onPress={()=>{
                        this.props.navigation.navigate('DrawerOpen')
                    }}>
                    <Text style={styles.text}>打开</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.touchable}
                    onPress={()=>{
                        this.props.navigation.navigate('DrawerClose')
                    }}>
                    <Text style={styles.text}>关闭</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

class Video extends Component {
    static navigationOptions = {
        tabBarLabel:'Video',
        tabBarIcon:({tintColor}) =>(
            <Image
                style={{
                    width:26,
                    height:26,
                    tintColor:tintColor
                }}
                source={require('../img/e2.png')}
            />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Video</Text>
            </View>
        )
    }
}

class User extends Component {
    static navigationOptions = {
        tabBarLabel:'User',
        tabBarIcon:({tintColor}) =>(
            <Image
                style={{
                    width:26,
                    height:26,
                    tintColor:tintColor
                }}
                source={require('../img/e3.png')}
            />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>User</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
    },
    touchable: {
        width: 240,
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

class WRNDrawer extends Component {

    render() {
        return (
            <Drawer
                type="overlay"
                openDrawerOffset={0.4}
                tapToClose={true}
                
            >

            </Drawer>
        )
    }

}