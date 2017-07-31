/**
 * Created by wangxuan on 2017/7/28.
 */

import React, {Component} from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
} from "react-native";
import ScrollableTabView from 'react-native-scrollable-tab-view'

import Home from './components/Home'
import Recommend from './components/Recommend'
import TabBar from './widget/TabBar'

const tabNames = ['主页','推荐']
const activetabIcon = [require('./img/icon_main_p.png'),require('./img/icon_recommend_p.png')]
const inactivetabIcon = [require('./img/icon_main_n.png'),require('./img/icon_recommend_n.png')]

export default class setup extends Component {

    constructor(props) {
        super(props)
    }


    render() {
        return (
            <ScrollableTabView
                renderTabBar={()=>
                    <TabBar
                        tabNames = {tabNames}
                        activetabIcon={activetabIcon}
                        inactivetabIcon={inactivetabIcon}/>}
                tabBarPosition='bottom'
                locked={true}
                scrollWithoutAnimation={true}>
                <Home/>
                <Recommend/>
            </ScrollableTabView>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
})