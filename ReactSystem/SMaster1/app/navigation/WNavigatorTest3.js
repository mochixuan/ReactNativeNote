/**
 * Created by wangxuan on 2017/7/30.
 */
import React,{Component} from 'react'
import {
    StyleSheet,
    Image,
    View,
    Text,
    ToastAndroid,
    TouchableOpacity
} from 'react-native'

export default class WNavigatorTest1 extends Component {

    static navigationOptions = {
        title: '页面三',
    }

    render() {
        const {navigate,state,goBack} = this.props.navigation;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.touchable}
                    onPress={()=>{
                        navigate('Page4');
                    }}>
                    <Text style={styles.text}>navigate</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.touchable}
                    onPress={()=>{
                        goBack()
                    }}>
                    <Text style={styles.text}>goBack</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.touchable}
                    onPress={()=>{
                        show(state.params.user)
                    }}>
                    <Text style={styles.text}>state</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.touchable}
                    onPress={()=>{
                        state.params.callback("来自Page3返回的数据 旋")
                        goBack()
                    }}>
                    <Text style={styles.text}>goBack并回数据</Text>
                </TouchableOpacity>
            </View>
        )
    }

}

let show= function(data){
    ToastAndroid.show(data,ToastAndroid.SHORT)
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
    },
    touchable: {
        width: 200,
        height:60,
        margin:10,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:"#39b85a",
        borderRadius:4,
    },
    textTitle: {
        alignSelf: 'center',
        fontSize:24,
        color: '#333'
    },
    text: {
        color: '#f5f5f5',
        fontSize: 20,
    }
})
