/**
 * Created by wangxuan on 2017/7/30.
 */
import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight,
    TouchableNativeFeedback,
    Platform,
} from 'react-native'

export default class TabBar extends Component {

    renderBarview() {

        return (
            <View style={styles.tab}>
                {
                    this.props.tabNames.map((item,i) =>
                        (Platform.OS=='ios') ? (
                            <TouchableHighlight
                                style={styles.tabitem}
                                key={i}
                                onPress={()=>this.props.goToPage(i)}>
                                this.getBarItem(item,i)
                            </TouchableHighlight>
                        ) : (
                            <TouchableNativeFeedback
                                style={styles.tabitem}
                                key={i}
                                onPress={()=>this.props.goToPage(i)}>
                                {this.getBarItem(item,i)}
                            </TouchableNativeFeedback>
                        )
                    )
                }
            </View>

        )
    }

    getBarItem(item,i) {
        let color = this.props.activeTab==i? '#139dee' : '#666666';
        let icon = this.props.activeTab==i?this.props.activetabIcon[i]:this.props.inactivetabIcon[i];
        return (
            <View style={styles.tabitem}>
                <Image
                    style={styles.image}
                    source={icon}
                />
                <Text style={[styles.text,{color:color}]}>{this.props.tabNames[i]}</Text>
            </View>
        )
    }

    render() {
        return this.renderBarview()
    }

}

const styles = StyleSheet.create({
    tab: {
        flexDirection: 'row',
    },
    tabitem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding:2,
    },
    image: {
        width: 30,
        height: 30,
    },
    text: {
        fontSize: 14,
    }
})