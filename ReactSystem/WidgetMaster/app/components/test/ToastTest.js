/**
 * Created by wangxuan on 2017/8/18.
 */
import React,{Component} from 'react'
import {
    StyleSheet,
    View,
} from 'react-native'
import WButton from '../base/WButton'
import {show} from '../../utils/Toast1Utils'
import CallBackListener from '../listener/CallBackListener'

export default class ToastTest extends Component {

    render() {
        let callBack = new CallBackListener()
        callBack.setCallBackListener(()=>{
            show("OnSuccess")
        },()=>{
            show("OnFailure")
        });

        return (
            <View style={styles.container}>
                <WButton
                    text="显示Toast"
                    onPress={()=>{
                        show("大家好")
                    }}
                />
                <WButton
                    text="监听1"
                    onPress={()=>{
                        callBack.onSuccess()
                    }}
                />
                <WButton
                    text="监听2"
                    onPress={()=>{
                        callBack.onFailure()
                    }}
                />
            </View>
        )

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        backgroundColor: '#f5f5f5',
    }
})