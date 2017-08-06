/**
 * Created by wangxuan on 2017/7/30.
 */
import React, {Component} from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    ActivityIndicator,
    FlatList,
    ToastAndroid,
    ScrollView,
    StatusBar,
} from "react-native";

export default class Detail extends Component {

    constructor(props) {
        super(props)

        this.state = {
            loaded: false,
            detailModel: {},
            commentModel:{},
            starDatas:[],
        }

        this.requestDatas()
    }

    requestDatas() {
        const {params} = this.props.navigation.state;
        const url = "http://m.maoyan.com/movie/"+params.movieId+".json"
        fetch(url)
            .then((reponse)=>reponse.json())
            .then((jsonData)=>{
                let stars = jsonData.data.MovieDetailModel.star.split(" ")
                let starDatas = []
                stars.filter((item)=>(item != null && item != ""))
                    .map((item,i)=>{
                        starDatas.push({key:item})
                    })
                this.setState({
                    detailModel:jsonData.data.MovieDetailModel,
                    commentModel:jsonData.data.CommentResponseModel,
                    loaded: true,
                    starDatas: starDatas,
                })
            })
            .catch((error)=>{
                this.setState({
                    loaded: true
                })
            })
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
                        backgroundColor="#d73237"
                    />
                    <View style={styles.header}>
                        <Text style={styles.header_title}>{
                            this.state.detailModel.nm
                        }</Text>
                    </View>
                    <ScrollView
                        style={styles.container}>
                        <Image
                            style={styles.banner}
                            source={require('../img/icon_mao.png')}>
                            <Image
                                style={styles.banner_img}
                                source={{uri:this.state.detailModel.img}}
                            />
                            <View style={styles.banner_r}>
                                <Text style={styles.banner_r_title}>{this.state.detailModel.nm}</Text>
                                <Text style={styles.banner_r_base}>{this.state.detailModel.cat}</Text>
                                <Text style={styles.banner_r_base}>评论:{this.state.detailModel.wish}</Text>
                                <Text style={styles.banner_r_base}>{this.state.detailModel.rt}</Text>
                                <Text style={styles.banner_r_base}>{this.state.detailModel.ver}</Text>
                            </View>
                        </Image>
                        <View style={styles.intro}>
                            <Text style={styles.intro_text}
                                  numberOfLines={4}>{
                                this.state.detailModel.dra
                                    .substring(3,this.state.detailModel.dra.length-4)
                            }</Text>
                        </View>
                        <View style={styles.star}>
                            <Text style={styles.star_text}>演员列表</Text>
                            <FlatList
                                data = {this.state.starDatas}
                                keyExtractor={(item, index) => index}
                                renderItem={({item})=>(
                                    <Text style={styles.star_view}>{item.key}</Text>
                                )}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                        <View>
                            <Text style={styles.star_text}>评论区</Text>
                            <FlatList
                                data = {this.state.commentModel.cmts}
                                keyExtractor={(item, index) => index}
                                ItemSeparatorComponent={() => <View style={{
                                    height: 4,
                                    backgroundColor: '#f5f5f5'
                                }}/>}
                                renderItem={({item})=>(
                                    <View style={styles.comment}>
                                        <View style={styles.comment_nick}>
                                            <Image
                                                style={styles.comment_nick_img}
                                                source={{uri:item.avatarurl}}
                                            />
                                            <Text style={styles.comment_nick_name}>{item.nickName}</Text>
                                        </View>
                                        <Text style={styles.comment_content}>{item.content}</Text>
                                        <Text style={styles.comment_time}>{item.time}</Text>
                                    </View>
                                )}
                                ListFooterComponent={<View style={styles.comment_footer}>
                                    <Text style={styles.comment_footer_text}>已没有更多了*_*</Text>
                                </View>}
                            />
                        </View>
                    </ScrollView>
                </View>
            )
        }

    }

    show(data) {
        ToastAndroid.show(data, ToastAndroid.SHORT)
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
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

    header:{
        height:48,
        backgroundColor:'#d73237',
        alignItems:'center',
        justifyContent:'center',
    },
    header_title: {
        fontSize:18,
        fontWeight: 'bold',
        color:'#f5f5f5',
    },
    banner:{
        height:200,
        flexDirection:'row',
        alignItems:'center',
    },
    banner_img: {
        width:120,
        height:160,
        borderWidth:2,
        borderColor: '#f5f5f5',
        marginLeft: 20,
        marginRight:20,
    },
    banner_r:{

    },
    banner_r_title: {
        fontSize:18,
        fontWeight: 'bold',
        color:'#f5f5f5',
    },
    banner_r_base:{
      marginTop:12,
      color: '#f5f5f5',
    },
    baseText:{
        color: '#f5f5f5',
    },
    intro: {
        padding:10,
        borderBottomColor:'#f5f5f5',
        borderBottomWidth:10,
    },
    intro_text: {
        color:'#666',
        fontSize:16,
    },
    star: {
        borderBottomColor:'#f5f5f5',
        borderBottomWidth:10,
        paddingBottom:10,
    },
    star_text:{
        color: '#65be89',
        padding:8,
        fontSize:18,
    },
    star_view: {
        backgroundColor: '#98AFC7',
        color: '#f5f5f5',
        paddingLeft:16,
        paddingRight:16,
        paddingTop:10,
        paddingBottom:10,
        borderRadius:6,
        fontSize:16,
        margin:4,
    },
    comment: {

    },
    comment_nick:{
        flexDirection:'row',
        padding:4,
        alignItems:'center'
    },
    comment_nick_img:{
        width:40,
        height:40,
        borderRadius:24,
        borderColor: '#dd5e4d',
        borderWidth:2,
        marginRight:8,
    },
    comment_nick_name:{
        fontSize:16,
        color: '#222'
    },
    comment_content: {
        fontSize: 14,
        color:'#444',
        padding:4,
    },
    comment_time: {
        alignSelf:'flex-end',
        fontSize:14,
        padding:4,
        color:'#666',
    },
    comment_footer:{
        justifyContent:'center',
        alignItems:'center',
        borderTopWidth:4,
        borderTopColor: '#f5f5f5',
        padding:16,
    },
    comment_footer_text:{
        fontSize: 16,
        color:'#666',
    }
})