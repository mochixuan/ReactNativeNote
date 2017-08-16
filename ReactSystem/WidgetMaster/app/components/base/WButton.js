/**
 * Created by wangxuan on 2017/8/14.
 */
import React,{Component} from 'react'
import {
    StyleSheet,
    Platform,
    Text,
    View,
    TouchableHighlight,
    TouchableNativeFeedback,
} from 'react-native'

export default class WButton extends Component {

    render() {
        return (
            (Platform.OS=='ios')?
                (
                    <TouchableHighlight
                        onClick={()=>{
                            this.props.onPress()
                        }}>
                        <View style={styles.touchView}>
                            <Text style={styles.text}>{this.props.text}</Text>
                        </View>
                    </TouchableHighlight>
                ):
                (
                    <TouchableNativeFeedback
                        onPress={()=>{
                            this.props.onPress()
                        }}>
                        <View style={styles.touchView}>
                            <Text style={styles.text}>{this.props.text}</Text>
                        </View>
                    </TouchableNativeFeedback>
                )
        )
    }

}

const styles = StyleSheet.create({
    touchView: {
        backgroundColor:'#48d1cc',
        height: 60,
        width: 180,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        margin:6,
    },
    text: {
        color: '#f5f5f5',
        fontWeight: 'bold',
        fontSize:20,
    },
})
