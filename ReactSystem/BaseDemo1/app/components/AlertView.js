import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    Alert,
    AlertIOS,
} from 'react-native'
import Button from "../widget/Button";
import {show} from '../utils/ToastUtils'

const {width,height} = Dimensions.get('window')

export default class AlertView extends Component {

    shouldComponentUpdate(nextProps,nextState) {
        console.log('-------',nextProps,nextState)
    }

    render() {
        this.props.name = "mochixuan"
        return (
            <View style={styles.container}>
                <Button
                    text={'Alert'}
                    isNativeFeedback={false}
                    onPress={()=>{
                        this.showAlert()
                    }}
                    onLongPress={()=>{

                    }}
                />
                <Button
                    text={'LongPress'}
                    isNativeFeedback={true}
                    onLongPress={()=>{
                        this.showAlert1()
                    }}
                />
            </View>
        )
    }

    showAlert() {
        Alert.alert(
            "温情提示",
            "是否删除该收藏?",
            [
                {
                    text: '点错了',
                    onPress: ()=>{

                    }
                },
                {
                    text: '取消',
                    onPress: ()=>{

                    },
                },
                {
                    text: '确定',
                    onPress: ()=>{

                    }
                },
            ],
            {
                cancelable: true,
                onDismiss: ()=>{

                }
            },
            'plain-text'
        )
    }

    showAlert1() {
        Alert.alert(
            "温情提示",
            "是否删除该收藏?",
            [
                {
                    text: '取消',
                    onPress: ()=>{

                    },
                },
                {
                    text: '确定',
                    onPress: ()=>{

                    }
                },
            ],
            {
                cancelable: true,
                onDismiss: ()=>{

                }
            }
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width,
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'space-around'
    }
})