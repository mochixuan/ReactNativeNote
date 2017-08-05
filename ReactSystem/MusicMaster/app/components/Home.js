/**
 * Created by wangxuan on 2017/7/29.
 */
import React, {Component} from "react";
import {
    StyleSheet,
    View, Text,
    Image,
    FlatList,
    RefreshControl,
    ActivityIndicator,
    ToastAndroid,
    Dimensions,
    TouchableHighlight,
} from "react-native";
import Swiper from 'react-native-swiper'

let dataOffset = 0;
const limit = 15;
let width = Dimensions.get('window').width;

export default class Recommend extends Component {

    constructor(props) {
        super(props)

        this.state = {
            loaded: false,
            movies: [],
            recommond: [],
            refreshing: false,
            isHasNext: true
        }

        this.requestDatas()
    }

    requestDatas() {
        const movieUrl = "http://m.maoyan.com/movie/list.json?type=hot&offset=" + (dataOffset * limit + 1) + "&limit=" + limit;
        ++dataOffset;
        fetch(movieUrl)
            .then((respone) => respone.json())
            .then((jsonData) => {
                this.setState({
                    recommond:jsonData.data.movies.filter((item,i) => i<5),
                    movies: jsonData.data.movies.filter((item,i) => i>=5).concat(this.state.movies),
                    loaded: true,
                    refreshing: false,
                    isHasNext: jsonData.data.hasNext,
                })
            }).catch((error) => {
            this.setState({
                loaded: true,
                refreshing: false,
            })
        });
    }

    _renderItemView(movies) {
        return (
            <TouchableHighlight
                style={styles.item}
                underlayColor='rgba(100,50,200,0.1)'
                onPress= {() => this.enterDetail(movies)}>
                <View style={styles.item}>
                    <Image
                        style={styles.item_image}
                        source={{uri: movies.img}}/>
                    <View style={styles.item_second}>
                        <Text
                            style={styles.item_title}
                        >{movies.nm}</Text>
                        <Text
                            style={styles.item_content}
                        >{movies.scm}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    swiperBannerList(datas) {
        return (
            datas.map((item,i) => {
                return (
                    <Image
                        key={i}
                        style={{
                            flex: 1,
                            height:180,
                            resizeMode: 'stretch',
                            backgroundColor: '#BCC6CC'
                        }}
                        source={{uri: item.img}}
                    />
                )
            })
        )
    }

    _headerItemView() {
        return (
            <Swiper
                height = {180}>
                {this.swiperBannerList(this.state.recommond)}
            </Swiper>
        )
    }

    _footerItemView() {
        return (
            <View style={{
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#00FA9A'
            }}>
                <Text style={{
                    fontWeight: '700',
                    fontSize: 24,
                    color: '#f5f5f5',
                }}>我是底部</Text>
            </View>
        )
    }

    _separatorView() {
        return (
            <View style={{
                height: 4,
                backgroundColor: '#f0f0f0'
            }}/>
        )
    }

    _refreshControlView() {
        return (
            <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={() => this._refresh()}
                colors={['#ff0000', '#00ff00', '#0000ff']}
            />
        )
    }

    /*唯一识别的ID*/
    _keyExtractor(item, index) {
        return index
    }

    _refresh() {
        if (this.state.isHasNext) {
            this.setState({
                refreshing: true
            })
            this.requestDatas()
        } else {
            this.show("没有更多消息")
        }

    }

    _getItemLayout(data, index) {
        return {length: 94, offset: (94 + 4) * index, index}
    }

    render() {
        if (!this.state.loaded) {
            return (
                <View style={styles.container_loading}>
                    <View style={styles.loading}>
                        <ActivityIndicator
                            animating={!this.state.loaded}
                            style={styles.loading_indicator}
                            color="#f5f5f5"
                            size='large'/>
                        <Text style={styles.loading_text}>加载中...</Text>
                    </View>
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <FlatList
                        data={this.state.movies}
                        keyExtractor={(item, index) => this._keyExtractor(item, index)}
                        renderItem={
                            ({item}) => this._renderItemView(item)
                        }
                        ListHeaderComponent={this._headerItemView()}
                        ListFooterComponent={this._footerItemView()}
                        ItemSeparatorComponent={() => this._separatorView()}
                        refreshControl={ this._refreshControlView() }
                        getItemLayout={(data, index) => this._getItemLayout(data, index)}
                    />
                </View>
            )
        }
    }

    show(data) {
        ToastAndroid.show(data, ToastAndroid.SHORT)
    }

    enterDetail(movies) {
        this.props.navigate('Detail',{movieId:movies.id})
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    container_loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loading: {
        width: 240,
        height: 240,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#50666666',
        borderRadius: 10,
    },
    loading_indicator: {
        height: 80,
    },
    loading_text: {
        color: '#f5f5f5',
        fontWeight: 'bold',
        fontSize: 16,
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        height: 94,
        alignSelf: 'stretch',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    item_image: {
        width: 92,
        height: 72,
        borderRadius: 8,
    },
    item_second: {
        height: 84,
        flexDirection: 'column',
        marginLeft: 10,
        justifyContent: 'center'
    },
    item_title: {
        fontSize: 20,
        color: '#3090C7',
        marginBottom: 4,
    },
    item_content: {
        fontSize: 16,
        color: '#F75D59'
    }
})