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
import TabBarView from '../assembly/TabBarView'

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

const WNavigatorTab = TabNavigator({
    TabBarView: {screen: TabBarView},
    Home:{screen:Home},
    Video:{screen:Video},
    User:{screen:User}
},{
    animationEnabled: true, // 切换页面时是否有动画效果
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 是否可以左右滑动切换tab
    backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarOptions: {
        activeTintColor: '#20ad62', // 文字和图片选中颜色
        inactiveTintColor: '#999', // 文字和图片未选中颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {
            height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
        },
        style: {
            backgroundColor: '#ffffff', // TabBar 背景色
            // height: 44
        },
        labelStyle: {
            fontSize: 10, // 文字大小
        },
    },
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