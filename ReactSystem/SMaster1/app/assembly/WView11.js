import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    ToastAndroid
} from 'react-native'
import WView1 from './WView1'

export default class WView11 extends Component {

    render() {
        return (
            <View style={styles.container}>
                <WView1
                    text="男"
                    textAtBehind={true}
                    chected={true}
                    onClick={(isChecked)=>{
                        ToastAndroid.show(isChecked+"",ToastAndroid.SHORT);
                    }}
                />
                <WView1
                    text="女"
                    textAtBehind={true}
                    onClick={(isChecked)=>{
                        ToastAndroid.show(isChecked+"",ToastAndroid.SHORT);
                    }}
                />
                <WView1
                    text="无"
                    textAtBehind={true}
                    onClick={(isChecked)=>{
                        ToastAndroid.show(isChecked+"",ToastAndroid.SHORT);
                    }}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
    }
})