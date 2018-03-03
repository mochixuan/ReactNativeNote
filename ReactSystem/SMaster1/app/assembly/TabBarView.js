/**
 * Created by wangxuan on 2017/7/29.
 */
import React,{Component} from 'react'
import {
    StyleSheet,
    Image,
    View,
    Text,
    ToastAndroid,
    TouchableOpacity,
} from 'react-native'
import ScrollableTabView,{DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view'
import TabBar from './TabBar'
import TabBar1 from './TabBar1'

const tabNames = ["Home","Recommend","Video","User"];
const tabIcons1 = ['md-car', 'md-car', 'md-car', 'md-car'];
const tabIcons = [require("../img/e1.png"),require("../img/e2.png"),require("../img/e3.png"),require("../img/e4.png")];

export default class TabBarView extends Component {

    _defaultTabBar1() {
        return (
            <ScrollableTabView
                renderTabBar={(props) => <DefaultTabBar/>}
                tabBarPosition='bottom'
                onChangeTab = {(obj)=>{
                    ToastAndroid.show(""+obj.i,ToastAndroid.SHORT)
                }}
                onScroll={(position) =>{
                    /*范围是[0, tab的数量-1]
                    console.log("=====>>"+position)*/
                }}
                //不可拖动
                locked={true}
                //初始化时被选中的Tab下标，默认是0
                initialPage={0}
                tabBarUnderlineStyle = {{backgroundColor: '#F62817'}}
                tabBarBackgroundColor="#008080"
                tabBarInactiveTextColor="#FDD017"
                tabBarActiveTextColor="#F62817"
                scrollWithoutAnimation={true}
            >
                <Text tabLabel = "Home"/>
                <Text tabLabel = "ReCommend" />
                <Text tabLabel = "Video"/>
                <Text tabLabel = "User"/>
            </ScrollableTabView>
        )
    }

    _defaultTabBar2() {
        return (
            <ScrollableTabView
                renderTabBar={(props) => <ScrollableTabBar/>}
                tabBarPosition='bottom'
                onChangeTab = {(obj)=>{
                    ToastAndroid.show(""+obj.i,ToastAndroid.SHORT)
                }}
                onScroll={(position) =>{
                    /*范围是[0, tab的数量-1]
                     console.log("=====>>"+position)*/
                }}
                //初始化时被选中的Tab下标，默认是0
                initialPage={0}
                tabBarUnderlineStyle = {{backgroundColor: '#F62817'}}
                tabBarBackgroundColor="#008080"
                tabBarInactiveTextColor="#FDD017"
                tabBarActiveTextColor="#F62817"
                scrollWithoutAnimation={true}
            >
                <View
                    tabLabel = "Home"
                    style={styles.view}
                ><Text style={styles.text}>Home</Text></View>
                <View
                    tabLabel = "ReCommend"
                    style={styles.view}
                ><Text style={styles.text}>ReCommend</Text></View>
                <View
                    tabLabel = "Video"
                    style={styles.view}
                ><Text style={styles.text}>Video</Text></View>
                <View
                    tabLabel = "User"
                    style={styles.view}
                ><Text style={styles.text}>User</Text></View>
            </ScrollableTabView>
        )
    }

    _defaultTabBar3() {
        return (
            <ScrollableTabView
                renderTabBar={(props) => <TabBar tabNames={tabNames} tabIconNames={tabIcons}/>}
                tabBarPosition='bottom'>
                <View
                    tabLabel = "Home"
                    style={styles.view}
                ><Text style={styles.text}>Home</Text></View>
                <View
                    tabLabel = "ReCommend"
                    style={styles.view}
                ><Text style={styles.text}>ReCommend</Text></View>
                <View
                    tabLabel = "Video"
                    style={styles.view}
                ><Text style={styles.text}>Video</Text></View>
                <View
                    tabLabel = "User"
                    style={styles.view}
                ><Text style={styles.text}>User</Text></View>
            </ScrollableTabView>
        )
    }

    render() {
        return (
            this._defaultTabBar2()
        )
    }

}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 28,
        fontWeight: 'bold',
    },
})