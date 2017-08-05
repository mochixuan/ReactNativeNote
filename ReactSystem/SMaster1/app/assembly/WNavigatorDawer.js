/**
 * Created by wangxuan on 2017/7/30.
 */
import React,{Component} from 'react'
import {
    StyleSheet,
    Image,
    View,
    Text,
    TouchableOpacity,
} from 'react-native'
import {DrawerNavigator} from 'react-navigation'

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

const WNavigatorDrawer = DrawerNavigator({
    Home:{screen:Home},
    Video:{screen:Video},
    User:{screen:User},
},{
    drawerWidth: 200, // 抽屉宽
    drawerPosition: 'left', // 抽屉在左边还是右边
    // contentComponent: CustomDrawerContentComponent,  // 自定义抽屉组件
    contentOptions: {
        initialRouteName: Home, // 默认页面组件
        activeTintColor: 'white',  // 选中文字颜色
        activeBackgroundColor: '#ff8500', // 选中背景颜色
        inactiveTintColor: '#666',  // 未选中文字颜色
        inactiveBackgroundColor: '#fff', // 未选中背景颜色
        style: {  // 样式

        }
    }
})

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

export default WNavigatorDrawer