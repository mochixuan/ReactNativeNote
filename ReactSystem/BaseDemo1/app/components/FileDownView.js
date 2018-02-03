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
    CameraRoll
} from 'react-native'
import RNDownLoad from 'react-native-fs'
import RNFetchBlob from 'react-native-fetch-blob'
import NaviBarView from './NaviBarView'

const {width,height} = Dimensions.get('window')

const imageUrl = 'http://n.sinaimg.cn/news/transform/20171127/zPtG-fypathz6248591.jpg'

export default class FileDownView extends Component {

    constructor() {
        super()
        this.state = {
            progress: 0,
            localImageUrl: ''
        }
    }

    render() {
        let image ;
        if (this.state.progress == 100) {
            image = (
                <Image
                    source ={{
                        uri: Platform.OS === 'android'? ('file://'+this.state.localImageUrl) : this.state.localImageUrl
                    }}
                    style={{
                        width: width-20,
                        height:300,
                        backgroundColor: '#66666666'
                    }}
                />
            )
        } else {
            image = (
                <Text style={{alignItems:'center', width:width-20}}>{this.state.progress}%</Text>
            )
        }
        return (
            <View style={styles.container}>
                <NaviBarView/>
                <TouchableOpacity
                    style={styles.button_view}
                    onPress={()=>{
                        this.downLoadFile()
                    }}>
                    <Text style={styles.button_text}>下载文件</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button_view}
                    onPress={()=>{
                        this.downLoadFile1()
                    }}>
                    <Text style={styles.button_text}>下载文件1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button_view}
                    onPress={()=>{
                        //this.downloadImgToCamera(imageUrl)
                        const destPath = Platform.OS === 'ios' ?
                            RNDownLoad.MainBundlePath +'/hong.jpg' :
                            RNDownLoad.ExternalDirectoryPath+'/'+'hong.jpg';
                        const destPath1 = "/data/user/0/com.basedemo/cache/ReactNative-snapshot-image544839369.png"
                        console.log('======>>destPath',destPath)
                        console.log('======>>destPath',destPath1)
                        this.downloadImgToCamera(destPath1)
                    }}>
                    <Text style={styles.button_text}>下载图片到相册</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button_view}
                    onPress={()=>{
                        const filePath = "file:///data/user/0/com.basedemo/cache/ReactNative-snapshot-image299153054.png"
                        const filePath1 = "file:///data/user/0/com.basedemo/cache/ReactNative-snapshot-image544839369.png"
                        const destPath = Platform.OS === 'ios' ?
                                RNDownLoad.MainBundlePath +'/hong.jpg' :
                                RNDownLoad.ExternalDirectoryPath+'/'+'hong.jpg';
                        this.moveFile(filePath1,destPath)
                    }}>
                    <Text style={styles.button_text}>文件移动</Text>
                </TouchableOpacity>
                <View style={{width:width,height:300,justifyContent: 'center',alignItems: 'center'}}>
                    {image}
                </View>
            </View>
        )
    }

    show(data) {
        ToastAndroid.show(data,ToastAndroid.SHORT)
    }

    downLoadFile() {

        const localImageUrl =
            Platform.OS === 'ios' ?
                RNDownLoad.MainBundlePath +'/hong.jpg' :
            RNDownLoad.ExternalDirectoryPath+'/'+'hong.jpg'
        this.setState({
            localImageUrl: localImageUrl
        })
        RNDownLoad.downloadFile({
            fromUrl: imageUrl,
            toFile: localImageUrl,
            begin: (res) => {
                console.log('begin: ', res.contentLength / 1024 / 1024, 'M');
            },
            progress: (res) => {
                const progress = (res.bytesWritten*100/res.contentLength).toFixed(0)
                console.log(progress,res.contentLength)
                if (this.state.progress != progress) {
                    this.setState({
                        progress: progress
                    })
                }
            },
            background: true,
            connectionTimeout: 10000,
            readTimeout: 10000
        }).promise.then((statResult)=>{
            this.setState({
                progress: 100
            })
        }).catch((error)=>{
            this.setState({
                progress: error.toString(),
            })
        })
    }

    downLoadFile1() {
        const localImageUrl =
            Platform.OS === 'ios' ?
                RNFetchBlob.fs.dirs.MainBundleDir +'/hong.jpg' :
            RNFetchBlob.fs.dirs.PictureDir +'/hong.jpg'
        this.setState({
            localImageUrl: localImageUrl
        })
        RNFetchBlob.config({
            path: localImageUrl
        }).fetch(
            'GET',imageUrl,{

            }
        ).progress((received,total)=>{
            const progress = (received*100/total).toFixed(0)
            if (this.state.progress != progress) {
                this.setState({
                    progress: progress
                })
            }
        }).then((res)=>{
            this.setState({
                progress: 100
            })
        }).catch((error)=>{
            this.setState({
                progress: error.toString(),
            })
        })
    }

    //On Android, the tag must be a local image or video URI,
    downloadImgToCamera(path) {
        CameraRoll.saveToCameraRoll(path,'photo')
            .then((res)=>{
                this.setState({
                    progress: res.toString(),
                })
            }).catch((error)=>{
            this.setState({
                progress: error.toString(),
            })
        })
    }

    moveFile(filePath,destPath) {
        RNDownLoad.moveFile(filePath,destPath)
            .then((data)=>{
                this.setState({
                    progress: data
                })
            })
            .catch((error)=>{
                this.setState({
                    progress: error,
                })
            })
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