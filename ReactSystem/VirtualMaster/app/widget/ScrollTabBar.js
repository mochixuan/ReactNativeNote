/**
 * Created by wangxuan on 2017/7/30.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Image,
    ScrollView
} from 'react-native';
import {main_color} from '../base/BaseStyle'

export default class ScrollTabBar extends Component {

    /*propTypes = {
        goToPage: React.PropTypes.func,  // 跳转到对应tab的方法
        activeTab: React.PropTypes.number,  // 当前被选中的tab下标
        tabs: React.PropTypes.array,  //所有tabs集合

        tabNames: React.PropTypes.array, // 保存Tab名称
        tabIconNames: React.PropTypes.array, // 保存Tab图标
    }*/

    renderTabOption(tab, i) {
        let color = this.props.activeTab == i ? "#ffffff" : "#a0a0a0"; // 判断i是否是当前选中的tab，设置不同的颜色
        return (
            <TouchableOpacity onPress={()=>this.props.goToPage(i)} style={styles.tab} key={i}>
                <View style={styles.tabItem}>
                    <Text style={{color: color}}>
                        {this.props.tabNames[i]}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.tabs}>
                    {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
                </View>
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    tabs: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: main_color
    },

    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    tabItem: {
        flexDirection: 'column',
        alignItems: 'center',
    },
});