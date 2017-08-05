import React, {Component} from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
} from "react-native";
import ScrollableTabView from 'react-native-scrollable-tab-view'

import Home from './Home'
import Recommend from './Recommend'
import TabBar from '../widget/TabBar'

const tabNames = ['主页','推荐']
const activetabIcon = [require('../img/icon_main_p.png'),require('../img/icon_recommend_p.png')]
const inactivetabIcon = [require('../img/icon_main_n.png'),require('../img/icon_recommend_n.png')]

export default class Main extends Component {

    constructor(props) {
        super(props)
        this.props.name = "Xuan";
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
                <Home navigate={this.props.navigation.navigate}/>
                <Recommend navigate={this.props.navigation.navigate}/>
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