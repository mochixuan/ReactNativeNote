import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class HelloConponent extends Component {
    render() {
        return <View style={ {
            //flexWrap:'wrap',        //显示不了的换行显示
            flexDirection:'row', //行列
            //justifyContent:'space-around',  //主轴 布局内的内容 flex-start flex-end center space-between(中间间隙均分) space-around(左右间隙均分)
            //alignItems:'stretch',      //侧轴 flex-start flex-end center stretch
            borderWidth:8,
            borderColor:'#33ffff',
            backgroundColor:"#a0a0a0",
            height:300,
            marginTop:20}}>

                <View style={ {
                    width:40,height:40,
                    backgroundColor:"darkcyan",
                    margin:5}}>
                    <Text style={ {fontSize:16}}>1</Text>
                </View>
                <View style={ {
                    width:40,height:40,
                    //alignSelf:'stretch',    //子视图的布局 auto flex-start flex-end center stretch
                    flex:1,                   //android 里的wight
                    backgroundColor:"darkcyan",
                    margin:5,
                    paddingLeft:20,
                    paddingTop:6}}>
                    <Text style={ {fontSize:16,backgroundColor:'#ff0000'}}>2</Text>
                </View>
                <View style={ {
                    width:40,height:40,
                    backgroundColor:"darkcyan",
                    margin:5}}>
                    <Text style={ {fontSize:16}}>3</Text>
                </View>
                <View style={ {
                    width:40,height:40,
                    backgroundColor:"darkcyan",
                    margin:5}}>
                    <Text style={ {fontSize:16}}>4</Text>
                </View>

        </View>
    }
}

