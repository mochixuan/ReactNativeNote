import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ToastAndroid,
    Dimensions,
    Platform
} from 'react-native'
import RNDownLoad from 'react-native-fs'
import RNFetchBlob from 'react-native-fetch-blob'

const {width,height} = Dimensions.get('window')

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
                        uri: Platform.OS === 'android'? 'file://'+this.state.localImageUrl:this.state.localImageUrl
                    }}
                    style={{
                        width:width,
                        height:300,
                        backgroundColor: '#66666666'
                    }}
                />
            )
        } else {
            image = (
                <Text style={{alignItems:'center'}}>{this.state.progress}%</Text>
            )
        }
        return (
            <View style={styles.container}>
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
        const localImageUrl = RNDownLoad.ExternalDirectoryPath+'/'+'hong.jpg'
        this.setState({
            localImageUrl: localImageUrl
        })
        RNDownLoad.downloadFile({
            fromUrl: 'http://n.sinaimg.cn/news/transform/20171127/zPtG-fypathz6248591.jpg',
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
            console.log('finish',statResult,this.state.localImageUrl)
            this.setState({
                progress: 100
            })
        }).catch((error)=>{
            console.log('error',error)
            this.setState({
                progress: '下载失败了',
            })
        })
    }

    downLoadFile1() {
        const localImageUrl = RNFetchBlob.fs.dirs.PictureDir+'/hong.jpg'
        RNFetchBlob.config({
            path: localImageUrl
        }).fetch(
            'GET','http://n.sinaimg.cn/news/transform/20171127/zPtG-fypathz6248591.jpg',{

            }
        ).progress((received,total)=>{
            const progress = (received*100/total).toFixed(0)
            if (this.state.progress != progress) {
                this.setState({
                    progress: progress
                })
            }
        }).then((res)=>{
            console.log('success',res)
            this.setState({
                progress: 100,
                localImageUrl: localImageUrl
            })
        }).catch((error)=>{
            console.log('error',error)
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