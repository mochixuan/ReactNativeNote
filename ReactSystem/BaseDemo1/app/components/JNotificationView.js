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
                    <Text style={styles.button_text}>极光推送</Text>
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
        JPushModule.addReceiveCustomMsgListener((message)=>{
            console.log("custom",message)
        })
        JPushModule.addReceiveNotificationListener((message)=>{
            console.log("notification",message)
        })
    }

    componentWillUnmount() {
        JPushModule.removeReceiveCustomMsgListener()
        JPushModule.removeReceiveNotificationListener()
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