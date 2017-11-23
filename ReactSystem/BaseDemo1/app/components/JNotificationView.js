import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ToastAndroid,
    TextInput,
} from 'react-native'
import JPushModule from 'jpush-react-native'

let curTag = ''
let curAlias = ''
let tags = []

export default class JNotificationView extends Component {

    constructor(){
        super()

    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.text_input}
                    placeholder="设置标签"
                    onChangeText={(text)=>{
                        curTag = text
                    }}
                />
                <TouchableOpacity
                    style={styles.button_view}
                    onPress={()=>{
                        if (curTag.length > 0) {
                            tags.push(curTag)
                            JPushModule.setTags(tags,()=>{
                                this.show("添加标签"+tags+"成功")
                                curTag = ""
                            },()=>{
                                this.show("添加标签"+tags+"失败")
                            })
                        } else {
                            this.show("请先输入标签")
                        }
                    }}>
                    <Text style={styles.button_text}>添加标签</Text>
                </TouchableOpacity>
                <TextInput
                    style={styles.text_input}
                    placeholder="设置别名"
                    onChangeText={(text)=>{
                        curAlias = text
                    }}
                />
                <TouchableOpacity
                    style={styles.button_view}
                    onPress={()=>{
                        if (curAlias.length > 0) {
                            JPushModule.setAlias(curAlias,()=>{
                                this.show("添加别名"+curAlias+"成功")
                            },()=>{
                                this.show("添加别名"+curAlias+"失败")
                            })
                        } else {
                            this.show("请先输入别名")
                        }
                    }}>
                    <Text style={styles.button_text}>添加别名</Text>
                </TouchableOpacity>
            </View>
        )
    }

    show(data) {
        ToastAndroid.show(data,ToastAndroid.SHORT)
    }

    componentDidMount() {
        JPushModule.notifyJSDidLoad((resultCode)=>{
            console.log("didLoad",resultCode)
        })
        //收到通知栏消息
        JPushModule.addReceiveNotificationListener((message)=>{
            console.log("notification",message)
        })
        //用户点击了消息
        JPushModule.addReceiveOpenNotificationListener((message)=>{
            console.log("openNotification",message)
        })
    }

    componentWillUnmount() {
        JPushModule.removeReceiveNotificationListener()
        JPushModule.removeReceiveOpenNotificationListener()
        //JPushModule.clearAllNotifications()
        //结束推送不再推送
        //JPushModule.stopPush()
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
    },
    text_input: {

    },
})