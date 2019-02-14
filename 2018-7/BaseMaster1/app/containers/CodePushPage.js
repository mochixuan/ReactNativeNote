import React,{Component} from 'react'
import {
    View,
    Dimensions,
    Platform,
    TouchableOpacity,
    StyleSheet,
    Text
} from 'react-native'
import CodePush from 'react-native-code-push'
import DeviceInfo from 'react-native-device-info'
const {width,height} = Dimensions.get('window')

export default class CodePushPage extends Component {

    constructor(props) {
        super()

        this.state = {
            tipData: '开始',
            downProgress: -1,
            debugMode: false
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text_black}>{this.state.tipData}</Text>
                <Text style={styles.text_black}>热更新进度: {this.state.downProgress}</Text>
                <View style={styles.desc}>
                    <Text style={styles.text_white}>
                        {`描述：\n1.未更新的状态 \n系统：\n当前APP版本: ${DeviceInfo.getVersion()}\n热更新环境: ${this.state.debugMode ? '测试环境' : '正式环境'}`}
                    </Text>
                </View>
                <TouchableOpacity onPress={()=>{
                    this.startCodePush()
                }} style={styles.button}>
                    <Text style={styles.text_white}>获取热更新</Text>
                </TouchableOpacity>
            </View>
        )
    }

    startCodePush = () => {
        CodePush.sync(
            {
                deploymentKey: this.getDeploymentKey(this.state.debugMode),
                updateDialog: false,
                installMode: CodePush.InstallMode.IMMEDIATE
            },
            this.codePushStatus,
            this.codePushDownloadDidProgress
        )
    }

    codePushStatus = (syncStatus) => {
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
    }

    codePushDownloadDidProgress = (progress) => {
        this.setState({
            downProgress: progress.totalBytes
        });
    }

    getDeploymentKey = (debugMode) => {
        if (Platform.OS === 'android') {
            if (debugMode) {
                return "maRSClEHwQ8F1kieCU6Y_bWenKTG9a537e10-5cfe-41a3-ad46-834ab32c75ac"
            } else {
                return "mgUHmvWhtzXBYQ2jAhCxbsNdQt0Z9a537e10-5cfe-41a3-ad46-834ab32c75ac"
            }
        } else {
            if (debugMode) {
                return "uThoPLWNZqXYEGaATlYcEjnrDeMT9a537e10-5cfe-41a3-ad46-834ab32c75ac"
            } else {
                return "KahiEQ97ecwtzC0czA5cr_yB3bBT9a537e10-5cfe-41a3-ad46-834ab32c75ac"
            }
        }
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    desc: {
        backgroundColor: '#ff8a14',
        padding: 10,
        borderRadius: 4,
        marginTop: 20
    },
    button: {
        width: width*0.6,
        height: 48,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7d8aff',
        marginTop: 20
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
