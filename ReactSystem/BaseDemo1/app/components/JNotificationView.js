import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ToastAndroid,
} from 'react-native'
import PushNotification from 'react-native-push-notification'

export default class JNotificationView extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button_view}
                    onPress={()=>{
                        this.generateLocalNotification()
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