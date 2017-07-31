/**
 * Created by wangxuan on 2017/7/27.
 */
import React,{Component} from 'react'
import {
    StyleSheet,
    Image,
    View,
    Text,
    Dimensions,
    FlatList,
} from 'react-native'
import ViewPager from 'react-native-viewpager'

let deviceWidth = Dimensions.get('window').width;

export default class Banner extends Component {

    constructor(props) {
        super(props)

        const vpData = [
            {title:'超级品牌', image:require('../img/g1.jpg')},
            {title:'家电狂欢', image:require('../img/g2.jpg')},
            {title:'企业采购', image:require('../img/g3.jpg')},
            {title:'女王范儿', image:require('../img/g4.jpg')},
            {title:'节能产品', image:require('../img/g5.jpg')},
        ]

        let vpDataSource = new ViewPager.DataSource({
            pageHasChanged: (p1,p2) => p1 !== p2
        })


        fetch('http://bbs.reactnative.cn/api/category/1').then((respone) => respone.json())
            .then((jsonData) => {
                console.log(jsonData);
                this.setState({
                    jsonData: jsonData.topics
                })
            })
            .catch((error) => {
                console.warn('异常：'+error)
            })

        this.state = {
            vpDataSource: vpDataSource.cloneWithPages(vpData),
            jsonData: []
        }
    }

    _renderPage(data,pageID) {

        return (
            <View style={styles.vp_view}>
                <Image
                    source={data.image}
                    style={styles.vp_image}>

                    <Text
                        style={styles.vp_text}
                    >{data.title}</Text>
                </Image>
            </View>
        )
    }

    render() {

        let imgBase = 'http://reactnative.cn/proxy/bbs.reactnative.cn'

        return (
            <View style={styles.container}>
                <ViewPager
                    style={styles.viewpager}
                    dataSource={this.state.vpDataSource}
                    renderPage={this._renderPage}
                    isLoop={true}
                />
                <FlatList
                    data = {this.state.jsonData}
                    renderItem = {
                        ({item}) => {
                            return (
                                <View style={styles.mainItem}>
                                    <Image
                                        style={styles.image}
                                        source={{uri : imgBase+item.user.picture}}
                                    />
                                    <View>
                                        <Text style={styles.time}>{
                                            item.timestampISO
                                        }</Text>

                                        <Text style={styles.content}>{
                                            item.title
                                        }</Text>
                                    </View>
                                </View>
                            )
                        }
                    }
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewpager: {
        height: 300,
        paddingBottom:20,
    },
    vp_view: {
        flexDirection: 'column',
        height: 300,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: deviceWidth,
    },
    vp_image: {
        flex: 1,
        height: 300,
        width: deviceWidth,
        resizeMode: 'stretch',
        justifyContent: 'flex-end'
    },
    vp_text: {
        height: 40,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#f5f5f5',
        width: deviceWidth,
        backgroundColor: '#66666666',
        textAlign: 'center',
        paddingTop: 8,
    },
    mainItem: {
        marginBottom: 10,
        alignItems: 'stretch',
        borderBottomWidth: 2,
        borderColor: '#e0e0e0',
        flexDirection: 'row',
        padding: 10,
    },
    image: {
        width: 50,
        height: 50,
        marginRight:20,
    },
    time: {
        color: '#666666',
        fontSize: 14,
    },
    content: {
        color: '#333333',
        fontSize: 20,
        marginTop: 10,
    }
})