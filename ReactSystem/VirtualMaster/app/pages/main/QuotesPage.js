'use strict'
import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    StatusBar,
    Dimensions
} from 'react-native'
import ScrollableTabView,{ScrollableTabBar} from 'react-native-scrollable-tab-view'
import {min_icon,main_color} from '../../base/BaseStyle'
import QuoteHeaderView from '../quotes/QuoteHeaderView'

const {width,height} = Dimensions.get('window')

const tabBarItems = ["自选","市值","涨幅","Bitcoin1","Bitcoin2",
    "Bitcoin3","Bitcoin4","Bitcoin5","Bitcoin6",
    "Bitcoin7","Bitcoin8","Bitcoin9","Bitcoin10"
]
export default class QuotesPage extends Component {

    static navigationOptions = {
        tabBarLabel: "行情",
        tabBarIcon: ({tintColor}) => (
            <Image
                style={[min_icon,{tintColor}]}
                source={require('../../data/img/quotes.png')}
            />
        )
    }

    constructor(props) {
        super();
        this.state = {
            delayShowScrollTableView: false
        }
    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                delayShowScrollTableView: true
            })
        },10)
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={main_color}
                />
                <View style={styles.header}>
                    <Text style={styles.title}>行情</Text>
                </View>
                {this.state.delayShowScrollTableView?this._renderScrollTableView():null}
            </View>
        )
    }

    _renderScrollTableView() {
        return (
            <ScrollableTabView
                renderTabBar = {(props) => <ScrollableTabBar/>}
                tabBarPosition = "top"
                initialPage = {0}
                tabBarBackgroundColor = {main_color}
                tabBarActiveTextColor = "#ffffff"
                tabBarInactiveTextColor = "#a0a0a0"
                tabBarUnderlineStyle = {{
                    height: 0,
                }}>
                {this._renderTabItemView()}
            </ScrollableTabView>
        )
    }

    _renderTabItemView() {
        return tabBarItems.map((item,index)=>{
            if (index == 0) {
                return (
                    <QuoteHeaderView tabLabel = {item}/>
                )
            }
            return (
                <View
                    key = {index}
                    tabLabel = {item}
                    style = {styles.tabbar_itemview}>
                    <Text style={styles.tabbar_itemtext}>{item}</Text>
                </View>
            )
        })
    }



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: main_color,
    },
    title: {
        fontSize: 18,
        padding: 4,
        color: '#fff',
        alignSelf: 'center',
        fontWeight: '400'
    },
    tabbar_itemview: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabbar_itemtext: {
        fontSize: 24,
        color: main_color
    }
})