import React,{Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    RefreshControl
} from 'react-native'
import {main_color} from "../../base/BaseStyle";

const itemHeight = 80;

export default class QuoteHeaderView extends Component {

    constructor(props) {
        super()
        this.state = {
            refreshing: false,
            datas: []
        }
    }

    componentDidMount() {
        this._getVirtualDatas()
    }

    render() {
        return (
            <FlatList
                data = {this.state.datas}
                keyExtractor = {(item,index)=>index}
                renderItem={({item,index}) => this._renderItemView(item,index)}
                refreshControl = {this._refreshControlView()}
                getItemLayout={(data,index)=> this._getItemLayout(index)}
                showsVerticalScrollIndicator={false}
            />
        )
    }

    _getVirtualDatas() {
        const datas = []
        for (let i = 0 ; i<20 ; i++) {
            datas.push({
                worth: `${(Math.random()*300+100).toFixed(2)}亿`,
                name: 'ABC/比特币'+i,
                amount: ((Math.random()*300+100).toFixed(2))+"万/"+(Math.random()*300+400).toFixed(2)+"亿",
                curWorth: "¥ "+(Math.random()*6000+100).toFixed(2),
                worthRatio: 2-Math.random()*4
            })
        }
        this.setState({
            refreshing: false,
            datas: datas
        })
    }

    _refreshControlView() {
        return (
            <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={() => {
                    this.setState({
                        refreshing: true
                    })
                    this.requestData()
                }}
                colors={['#00ff00','#ff0000', '#0000ff']}
            />
        )
    }

    requestData() {
        this.requestTest = setTimeout(()=>{
            this._getVirtualDatas()
        },1500)
    }

    _getItemLayout(index) {
        return {length: itemHeight,offset: itemHeight*index,index}
    }

    _renderItemView(item,index) {
        return (
            <View style={styles.item}>
                <View style={styles.item_left}>
                    <View style={styles.item_left_top}>
                        <Text style={[styles.item_min_text,{marginRight: 6,color: main_color}]} numberOfLines={1}>#{index}</Text>
                        <Text style={[styles.item_min_text,{marginRight: 6}]} numberOfLines={1}>市值</Text>
                        <Text style={styles.item_min_text} numberOfLines={1}>{item.worth}</Text>
                    </View>
                    <View style={styles.item_left_center} numberOfLines={1}>
                        <Text style={[styles.item_max_text,{fontWeight: '500'}]} numberOfLines={1}>{item.name}</Text>
                    </View>
                    <View style={styles.item_left_bottom}>
                        <Text style={[styles.item_min_text,{marginRight: 6}]} numberOfLines={1}>量/额</Text>
                        <Text style={[styles.item_min_text,{marginRight: 6}]} numberOfLines={1}>{item.amount}</Text>
                    </View>
                </View>
                <View style={styles.item_middle}>
                    <Text style={[styles.item_max_text,{fontSize: 20}]} numberOfLines={1}>{item.curWorth}</Text>
                </View>
                <View style={styles.item_right}>
                    <View style={[styles.item_worth_ratio,{
                        backgroundColor: `${item.worthRatio >= 0 ? '#3aff0b' : '#dc1d1c'}`
                    }]}>
                        <Text style={{color: '#fff',fontSize: 14}}>{item.worthRatio.toFixed(2)}%</Text>
                    </View>
                </View>
            </View>
        )
    }

    componentWillUnMount() {
        if (this.requestTest) {
            clearTimeout(this.requestTest)
        }
    }

}

const styles = StyleSheet.create({
    item: {
        height: itemHeight,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        flexDirection: 'row',
        marginLeft: 8,
    },
    item_left: {
        flex: 2,
    },
    item_left_top: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row'
    },
    item_left_center: {
        flex: 1,
        justifyContent: 'center',
    },
    item_left_bottom: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
    },
    item_middle: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    item_right: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    item_min_text: {
        color: '#666666',
        fontSize: 12
    },
    item_max_text: {
        color: '#444444',
        fontSize: 15
    },
    item_worth_ratio: {
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 36,
    }
})



