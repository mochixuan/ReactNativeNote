import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ToastAndroid,
    Dimensions,
    Platform,
    CameraRoll,
    NativeModules,
} from 'react-native'
import RNDownLoad from 'react-native-fs'
import RNFetchBlob from 'react-native-fetch-blob'
import NaviBarView from './NaviBarView'

const {width,height} = Dimensions.get('window')

export default class NativeMethodView extends Component {

    constructor() {
        super()
    }

    render() {
        return (
            <View style={styles.container}>
                <NaviBarView/>
                <TouchableOpacity
                    style={styles.button_view}
                    onPress={()=>{
                        this.adjustiOSCalendar()
                    }}>
                    <Text style={styles.button_text}>iOS日历调用</Text>
                </TouchableOpacity>
            </View>
        )
    }

    show(data) {
        ToastAndroid.show(data,ToastAndroid.SHORT)
    }

    adjustiOSCalendar() {
        //简单的学习了一下
        if (Platform.OS === 'ios') {
            const CalendarManager = NativeModules.CalendarManager
            CalendarManager.addEvent('mochixuan','深圳 龙华')
            //CalendarManager.addEvent('Birthday Party', '4 Privet Drive, Surrey', (new Date()).getTime())
        } else {
            this.show('请在iPhone上测试')
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    button_view: {
        margin:4,
        borderRadius: 4,
        backgroundColor: '#8d4dfc',
        alignItems: 'center',
    },
    button_text: {
        padding: 6,
        fontSize: 16,
        fontWeight: '600'
    }
})