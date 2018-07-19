/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View,Text,TouchableOpacity,Dimensions} from 'react-native';
import CodePush from 'react-native-code-push'
const {width,height} = Dimensions.get('window')

export default class App extends Component {

    constructor(props) {
        super()

        this.state = {
            tipData: '开始',
            downProgress: -1,
        }
    }

    render() {
      return (
        <View style={styles.container}>
            <Text style={styles.text_black}>{this.state.tipData}</Text>
            <Text style={styles.text_black}>热更新进度: {this.state.downProgress}</Text>
            <TouchableOpacity onPress={()=>{
                this.startCodePush()
            }} style={styles.button}>
                <Text style={styles.text_white}>获取热更新1.0.1 </Text>
            </TouchableOpacity>
        </View>
      );
    }

    startCodePush = () => {
        CodePush.sync(
            {
                // deploymentKey: '', //部署key，指定你要查询更新的部署秘钥，默认情况下该值来自于Info.plist(Ios)和MianActivity.java(Android)文件，你可以通过设置该属性来动态查询不同部署key下的更新
            },
            (syncStatus) => {
                switch(syncStatus) {
                    case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
                        this.setState({
                            tipData: this.state.tipData + "\n检查更新信息 Checking for update."
                        });
                        break;
                    case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
                        this.setState({
                            tipData: this.state.tipData + "\n下载升级包 Downloading package."
                        });
                        break;
                    case CodePush.SyncStatus.AWAITING_USER_ACTION:
                        this.setState({
                            tipData: this.state.tipData + "\n等待用户选择 Awaiting user action."
                        });
                        break;
                    case CodePush.SyncStatus.INSTALLING_UPDATE:
                        this.setState({
                            tipData: this.state.tipData + "\n安装更新 Installing update."
                        });
                        break;
                    case CodePush.SyncStatus.UP_TO_DATE:
                        this.setState({
                            tipData: this.state.tipData + "\nApp是最新版本 App up to date.",
                            downProgress: false
                        });
                        break;
                    case CodePush.SyncStatus.UPDATE_IGNORED:
                        this.setState({
                            tipData: this.state.tipData + "\n用户取消更新 Update cancelled by user.",
                            downProgress: false
                        });
                        break;
                    case CodePush.SyncStatus.UPDATE_INSTALLED:
                        this.setState({
                            tipData: this.state.tipData + "\n升级包被安装下次进入时开始加载 Update installed and will be applied on restart.",
                            downProgress: false
                        });
                        break;
                    case CodePush.SyncStatus.UNKNOWN_ERROR:
                        this.setState({
                            tipData: this.state.tipData + "\n未知的错误出现 An unknown error occurred.",
                            downProgress: false
                        });
                        break;
                }
            },
            this.codePushDownloadDidProgress.bind(this)
        )
    }

    codePushDownloadDidProgress(progress) {
        this.setState({
            downProgress: progress.totalBytes
        });
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: width*0.6,
        height: 48,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7d8aff'
    },
    text_black: {
        fontSize: 18,
        color: '#ff6772',
        padding: 10,
    },
    text_white: {
        fontSize: 18,
        color: '#fff',
    }
});
