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
    StatusBar,
} from "react-native";

let dataOffset = 0;
const limit = 15;
const width = Dimensions.get('window').width;
const itemHight = 170

export default class Recommend extends Component {

    constructor(props) {
        super(props)

        this.state = {
            loaded: false,
            movies: [],
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
                    movies: [...jsonData.data.movies,...this.state.movies],
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
                <View style={styles.item_ivew}>
                    <Image
                        style={styles.item_image}
                        source={{uri: movies.img}}/>
                    <View style={styles.item_second}>
                        <Text
                            style={styles.item_title}
                            numberOfLines={1}
                        >{movies.nm}</Text>
                        <Text
                            style={styles.item_content}
                            numberOfLines={1}
                        >{movies.scm}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    enterDetail(movies) {
        this.props.navigate('Detail',{movieId:movies.id})
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
            ToastAndroid.show("没有更多消息", ToastAndroid.SHORT)
        }

    }

    _getItemLayout(data, index) {
        return {length: itemHight, offset: itemHight * index, index}
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
                    <StatusBar
                        translucent={false}
                        backgroundColor="rgba(100,100,100,0.3)"
                    />
                    <FlatList
                        data={this.state.movies}
                        keyExtractor={(item, index) => this._keyExtractor(item, index)}
                        renderItem={
                            ({item}) => this._renderItemView(item)
                        }
                        refreshControl={ this._refreshControlView() }
                        getItemLayout={(data, index) => this._getItemLayout(data, index)}
                        numColumns={2}
                    />
                </View>
            )
        }
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
        flexDirection: 'column',
        width:width/2,
        height: itemHight,
        alignItems: 'center',
        padding:4,
    },
    item_ivew: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#e0e0e0',
        flex: 1,
        width: width/3,
    },
    item_image: {
        width: 80,
        height: 100,
        borderRadius: 8,
    },
    item_second: {
        height: 40,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 4,
    },
    item_title: {
        fontSize: 16,
        color: '#3090C7',
        textAlign: 'center',
    },
    item_content: {
        fontSize: 12,
        color: '#F75D59',
        textAlign: 'center',
    }
})