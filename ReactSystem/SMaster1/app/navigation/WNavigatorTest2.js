/**
 * Created by wangxuan on 2017/7/30.
 */
import React,{Component} from 'react'
import {
    StyleSheet,
    Image,
    View,
    Text,
    TouchableOpacity
} from 'react-native'

export default class WNavigatorTest2 extends Component {

    static navigationOptions = ({ navigation }) => ({
        title:  `页面二: ${navigation.state.params==null?"无参":navigation.state.params.user}`,

    });

    render() {
        const {params} = this.props.navigation.state;
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.textTitle}>
                    {params==null?"无参数":params.user}
                </Text>
                <TouchableOpacity
                    style={styles.touchable}
                    onPress={()=>{
                        navigate('Page1')
                    }}>
                    <Text style={styles.text}>跳转页面一</Text>
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
        width: 140,
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
