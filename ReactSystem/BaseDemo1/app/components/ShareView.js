import React,{Component} from 'react'
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Platform,
} from 'react-native'
import * as WeChat from 'react-native-wechat'
import {show} from '../utils/ToastUtils'
import RNDownLoad from 'react-native-fs'
const resolveAssetSource = require('resolveAssetSource');

export default class ShareView extends Component {

    //建议在应用启动时初始化，初始化之前无法使用此模块的其他方法。WeChat模块只需要初始化一次。
    componentDidMount() {
        WeChat.registerApp("wxb808075ab1e17922")
    }

    render() {
        const destPath = Platform.OS === 'ios' ?
            RNDownLoad.MainBundlePath +'/hong.jpg' :
            RNDownLoad.ExternalDirectoryPath+'/'+'hong.jpg';
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    underlayColor="rgba(77,94,225,0.5)"
                    onPress={()=>{
                        WeChat.isWXAppInstalled()
                            .then((isInstalled)=>{
                                if (isInstalled) {
                                    WeChat.shareToSession({
                                        type: 'text',
                                        title: '我是标题',
                                        description: '测试微信好友分享文本'
                                    }).then((data)=>{
                                        show("微信分享："+data)
                                    }).catch((error)=>{
                                        show("微信分享："+error)
                                    })
                                } else {
                                    show("没有微信客户端")
                                }
                            })
                    }}
                    style={styles.button_view}>
                    <Text style={styles.button_text}>微信好友分享-文本</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    underlayColor="rgba(77,94,225,0.5)"
                    onPress={()=>{
                        WeChat.isWXAppInstalled()
                            .then((isInstalled)=>{
                                if (isInstalled) {
                                    WeChat.shareToSession({
                                        type: 'news',
                                        thumbImage: 'https://avatars0.githubusercontent.com/u/15728691?s=460&v=4',
                                        webpageUrl: 'https://github.com/mochixuan',
                                        title: '我是标题title',
                                        description: '我是description',
                                        messageExt: '我是messageExt'
                                    }).then((data)=>{
                                        show("微信分享："+data)
                                    }).catch((error)=>{
                                        show("微信分享："+error)
                                    })
                                } else {
                                    show("没有微信客户端")
                                }
                            })
                    }}
                    style={styles.button_view}>
                    <Text style={styles.button_text}>微信好友分享-链接</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    underlayColor="rgba(77,94,225,0.5)"
                    onPress={()=>{
                        WeChat.isWXAppInstalled()
                            .then((isInstalled)=>{
                                if (isInstalled) {
                                    WeChat.shareToTimeline({
                                        type: 'text',
                                        thumbImage: 'https://avatars0.githubusercontent.com/u/15728691?s=460&v=4',
                                        webpageUrl: 'https://github.com/mochixuan',
                                        title: '我是标题title',
                                        description: '我是description',
                                        messageExt: '我是messageExt'
                                    }).then((data)=>{
                                        show("微信分享："+data)
                                    }).catch((error)=>{
                                        show("微信分享："+error)
                                    })
                                } else {
                                    show("没有微信客户端")
                                }
                            })
                    }}
                    style={styles.button_view}>
                    <Text style={styles.button_text}>微信朋友圈-文本</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    underlayColor="rgba(77,94,225,0.5)"
                    onPress={()=>{
                        WeChat.isWXAppInstalled()
                            .then((isInstalled)=>{
                                if (isInstalled) {
                                    WeChat.shareToTimeline({
                                        type: 'news',
                                        thumbImage: 'https://avatars0.githubusercontent.com/u/15728691?s=460&v=4',
                                        webpageUrl: 'https://github.com/mochixuan',
                                        title: '我是标题title',
                                        description: '我是description',
                                        messageExt: '我是messageExt'
                                    }).then((data)=>{
                                        show("微信分享："+data)
                                    }).catch((error)=>{
                                        show("微信分享："+error)
                                    })
                                } else {
                                    show("没有微信客户端")
                                }
                            })
                    }}
                    style={styles.button_view}>
                    <Text style={styles.button_text}>微信朋友圈-链接</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    underlayColor="rgba(77,94,225,0.5)"
                    onPress={()=>{
                        console.log('---------1',resolveAssetSource(require('../img/e2.png')).uri)
                        console.log('---------2',"file:///data/user/0/com.basedemo/cache/ReactNative-snapshot-image544839369.png")
                        WeChat.isWXAppInstalled()
                            .then((isInstalled)=>{
                                if (isInstalled) {
                                    WeChat.shareToSession({
                                        type: 'imageFile',
                                        imageUrl: 'file:///data/user/0/com.basedemo/cache/ReactNative-snapshot-image544839369.png',
                                        title: '我是标题title',
                                        description: '我是description',
                                        messageExt: '我是messageExt',
                                        mediaTagName: '我是张截图',
                                    }).then((data)=>{
                                        show("微信分享："+data)
                                    }).catch((error)=>{
                                        show("微信分享："+error)
                                    })
                                } else {
                                    show("没有微信客户端")
                                }
                            })
                    }}
                    style={styles.button_view}>
                    <Text style={styles.button_text}>微信朋友圈-图片</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        margin: 8,
    },
    button_view: {
        padding: 6,
        margin: 4,
        backgroundColor: '#5fc0a5',
        alignItems: 'center',
        borderRadius:4,
    },
    button_text: {
        fontSize: 18,
        fontWeight: '600',
        color: '#f0f0f0',
    }

})