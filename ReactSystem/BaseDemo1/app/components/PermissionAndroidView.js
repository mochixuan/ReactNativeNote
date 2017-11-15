import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ToastAndroid,
    PermissionsAndroid,
} from 'react-native'

export default class PermissionAndroidView extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button_view}
                    onPress={this.requestReadPermission.bind(this)}>
                    <Text style={styles.button_text}>申请读写权限</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button_view}>
                    <Text style={styles.button_text}>申请相机权限</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button_view}>
                    <Text style={styles.button_text}>申请访问地址权限</Text>
                </TouchableOpacity>
            </View>
        )
    }

    show(data) {
        ToastAndroid.show(data,ToastAndroid.SHORT)
    }

    /*
    * 弹出提示框向用户请求某项权限。返回一个promise，最终值为用户是否同意了权限申请的布尔值。
    * 其中rationale参数是可选的，其结构为包含title和message)的对象。
    * 此方法会和系统协商，是弹出系统内置的权限申请对话框，
    * 还是显示rationale中的信息以向用户进行解释。
    * */
    async requestReadPermission() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    'title': '我要读写权限',
                    'message': '没权限我不能工作，同意就好了'
                }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                this.show("你已获取了读写权限")
            } else {
                this.show("获取读写权限失败")
            }
        } catch (err) {

        }
    }

    async requestCarmeraPermission() {

    }

    async requestLocationPermission() {

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