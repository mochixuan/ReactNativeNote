/**
 * Created by wangxuan on 2017/7/30.
 */
import React,{Component} from 'react'
import {
    StyleSheet,
    Image,
    View,
    Text,
    TouchableOpacity,
} from 'react-native'

export default class WNavigatorTest1 extends Component {

    /*static navigationOptions = {
        title: '页面一',
    }*/

    render() {
        const {navigate} = this.props.navigation
        return (
            <View style={styles.container}>
                <Text>{this.props.navigation.state.params==null?'无':this.props.navigation.state.params.name}</Text>
                <TouchableOpacity
                    style={styles.touchable}
                    onPress={()=>{
                        navigate('Page2')
                    }}>
                    <Text style={styles.text}>跳转到页面二</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.touchable}
                    onPress={()=>{
                        navigate('Page2',{
                            user: '莫辞旋'
                        })
                    }}>
                    <Text style={styles.text}>带参数的</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.touchable}
                    onPress={()=>{
                        navigate('Page2')
                    }}>
                    <Text style={styles.text}>单机跳转</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.touchable}
                    onPress={()=>{
                        navigate('Page4')
                    }}>
                    <Text style={styles.text}>跳转TabNavigator</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.touchable}
                    onPress={()=>{
                        navigate('Page3')
                    }}>
                    <Text style={styles.text}>StackNavigatorAllOption</Text>
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
    },
    touchable: {
        width: 240,
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
