import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ToastAndroid,
} from 'react-native'
import PushNotification from 'react-native-push-notification'

let id = 0

export default class NotificationView extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button_view}
                    onPress={()=>{
                        this.generateLocalNotification()
                        id++;
                    }}>
                    <Text style={styles.button_text}>本地Notification</Text>
                </TouchableOpacity>
            </View>
        )
    }

    show(data) {
        ToastAndroid.show(data,ToastAndroid.SHORT)
    }

    generateLocalNotification() {
        PushNotification.localNotification(
            {
                id: id+"",
                autoCancel: true,
                ticker: '我是ticker',

                bigText: '变大时显示的',
                subText: '这是通知的次要内容',

                title: '我是title'+id,
                message: '我是message',

                largeIcon: '../img/e2.png',
                smallIcon: '../img/e2.png',

                //设置他为一个正在进行的通知。他们通常是用来表示一个后台任务,用户积极参与(如播放音乐)或以某种方式正在等待,因此占用设备(如一个文件下载,同步操作,主动网络连接)
                ongoing: false,

                group: 'wx12',

                //下面两个一起控制震动问题
                vibrate: false,
                playSound: false,
            }
        )
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