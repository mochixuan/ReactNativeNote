/**
 * Created by wangxuan on 2017/8/17.
 */
import React,{Component} from 'react'
import {
    AppRegistry,
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import CodePush from 'react-native-code-push'
import Test1 from './component/Test1'

class App extends Component {
    constructor() {
        super();
        this.state = {
            restartAllowed: true
        }
    }

    codePushStatusDidChange(syncStatus) {
        switch(syncStatus) {
            case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
                this.setState({
                    syncMessage: "检查更新信息 Checking for update."
                });
                break;
            case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
                this.setState({
                    syncMessage: "下载升级包 Downloading package."
                });
                break;
            case CodePush.SyncStatus.AWAITING_USER_ACTION:
                this.setState({
                    syncMessage: "等待用户选择 Awaiting user action."
                });
                break;
            case CodePush.SyncStatus.INSTALLING_UPDATE:
                this.setState({
                    syncMessage: "安装更新 Installing update."
                });
                break;
            case CodePush.SyncStatus.UP_TO_DATE:
                this.setState({
                    syncMessage: "App是最新版本 App up to date.",
                    progress: false
                });
                break;
            case CodePush.SyncStatus.UPDATE_IGNORED:
                this.setState({
                    syncMessage: "用户取消更新 Update cancelled by user.",
                    progress: false
                });
                break;
            case CodePush.SyncStatus.UPDATE_INSTALLED:
                this.setState({
                    syncMessage: "升级包被安装下次进入时开始加载 Update installed and will be applied on restart.",
                    progress: false
                });
                break;
            case CodePush.SyncStatus.UNKNOWN_ERROR:
                this.setState({
                    syncMessage: "未知的错误出现 An unknown error occurred.",
                    progress: false
                });
                break;
        }
    }

    codePushDownloadDidProgress(progress) {
        this.setState({ progress });
    }

    toggleAllowRestart() {
        this.state.restartAllowed
            ? CodePush.disallowRestart() //禁止重启
            : CodePush.allowRestart();   //允许重启

        this.setState({ restartAllowed: !this.state.restartAllowed });
    }

    //获取当前已安装更新的元数据（描述、安装时间、大小等）。
    getUpdateMetadata() {
        //noinspection JSAnnotator
        CodePush.getUpdateMetadata(CodePush.UpdateState.RUNNING)
            .then((metadata: LocalPackage) => {
                this.setState({
                    syncMessage: metadata ? JSON.stringify(metadata) : "Running binary version",
                    progress: false
                });
            }, (error: any) => {
                this.setState({
                    syncMessage: "Error: " + error,
                    progress: false
                });
            });
    }

    /*
    * Update is downloaded silently, and applied on restart (recommended)
    * 自动检查升级并下载安装，在重新开始后推荐
    * */
    sync() {
        CodePush.sync(
            {

            },
            this.codePushStatusDidChange.bind(this),
            this.codePushDownloadDidProgress.bind(this)
        );
    }

    /** Update pops a confirmation dialog, and then immediately reboots the app */
    syncImmediate() {
        CodePush.sync({
                installMode: CodePush.InstallMode.IMMEDIATE, //会立刻重新价值
                 //{ installMode: CodePush.InstallMode.IMMEDIATE, updateDialog: true },
                updateDialog: {
                    appendReleaseDescription:true,
                    descriptionPrefix:'\n更新测试:\n',
                    title: '版本更新',
                    optionalIgnoreButtonLabel: '取消',
                    optionalInstallButtonLabel:'更新',
                    optionalUpdateMessage: '是否进行更新，你自己更新',
                    mandatoryContinueButtonLabel:'重要更新',
                    mandatoryUpdateMessage:'这是重要更新信息，必须要更新哦！',
                }
            },
            this.codePushStatusDidChange.bind(this),
            this.codePushDownloadDidProgress.bind(this)
        );
    }

    render() {
        let progressView;

        if (this.state.progress) {
            progressView = (
                <Text style={styles.messages}>
                    {this.state.progress.receivedBytes} of {this.state.progress.totalBytes} bytes received
                </Text>
            );
        }

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    {this.state.syncMessage || "信息集合"}
                </Text>
                <TouchableOpacity onPress={this.sync.bind(this)}>
                    <Text style={styles.syncButton}>Press for background sync</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.syncImmediate.bind(this)}>
                    <Text style={styles.syncButton}>Press for dialog-driven sync</Text>
                </TouchableOpacity>
                {progressView}
                {/*<Image style={styles.image} resizeMode={Image.resizeMode.contain} source={require("./image/laptop_phone_howitworks.png")}/>*/}
                <TouchableOpacity onPress={this.toggleAllowRestart.bind(this)}>
                    <Text style={styles.restartToggleButton}>Restart { this.state.restartAllowed ? "allowed" : "forbidden"}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.getUpdateMetadata.bind(this)}>
                    <Text style={styles.syncButton}>Press for Update Metadata</Text>
                </TouchableOpacity>
                <Text style={styles.messages}>Version debug 1.0.1</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#F5FCFF",
        paddingTop: 20
    },
    image: {
        margin: 30,
        width: 240,
        height: 120,
    },
    messages: {
        marginTop: 20,
        textAlign: "center",
    },
    restartToggleButton: {
        color: "#f5f5f5",
        fontSize: 17,
        backgroundColor: '#456789',
        padding:10,
        borderRadius: 4,
        margin:4,
    },
    syncButton: {
        color: "#f5f5f5",
        fontSize: 17,
        backgroundColor: '#456789',
        padding:10,
        borderRadius: 4,
        margin:4,
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 20,
        color: '#f50000'
    },
});

/**
 * Configured with a MANUAL check frequency for easy testing. For production apps, it is recommended to configure a
 * different check frequency, such as ON_APP_START, for a 'hands-off' approach where CodePush.sync() does not
 * need to be explicitly called. All options of CodePush.sync() are also available in this decorator.
 */
let codePushOptions = { checkFrequency: CodePush.CheckFrequency.MANUAL };

App = CodePush(codePushOptions)(App);

export default App

