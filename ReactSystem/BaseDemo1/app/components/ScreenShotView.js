import React,{Component} from 'react'
import {
    View,
    ScrollView,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
} from 'react-native'
import ViewShot,{captureScreen,captureRef} from 'react-native-view-shot'
import {show} from "../utils/ToastUtils";
const {width,height} = Dimensions.get('window')

/*
* 截取当前屏幕，跟系统自带的截图一致，只会截取当前屏幕显示的页面内容。如果是ScrollView，那么未显示的部分是不会被截取的。
* captureScreen
*
* 根据组件reference名称来截取
* captureRef
* 指定需要截取的组件的ref名称，然后将该ref名称传递给snapshot方法来截取指定组件的内容。如需要截取ScrollView，只需要将”full”传递给snapshot方法即可。
* captureRef方法和captureScreen方法都可以设置options，options的说明如下：
* width / height：可以指定最后生成图片的宽度和高度。
* format：指定生成图片的格式png or jpg or webm (Android). 默认是png。
* quality：图片的质量0.0 - 1.0 (default)。
* result：最后生成的类型，可以是tmpfile、base64、data-uri。
* snapshotContentContainer：如果设置为True的话，会动态计算组件的高度。如果是ScrollView组件，就会截取整个ScrollView的实际高度。
* */

export default class ScreenShotView extends Component {

    constructor(props) {
        super()
        this.state = {
            tip: '',
            screenImage: ''
        }
    }

    render() {
        return (
            <ScrollView
                ref='full'
                style={styles.container} >
                <View style={[styles.container,{alignItems: 'center'}]}>
                    {this.renderScreenImage()}
                    <Text style={[styles.item,{lineHeight:20,height: 200}]}>{this.state.tip}</Text>
                    <TouchableOpacity style={{
                        width: width*0.9,
                        height: 80,
                        backgroundColor: '#81c6ff',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                        marginTop: 10,
                    }}
                        onPress={()=>{
                            this.screenShot()
                        }}
                    >
                        <Text>截图</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        width: width*0.9,
                        height: 80,
                        backgroundColor: '#81c6ff',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                        marginTop: 10,
                    }}
                      onPress={()=>{
                          this.screenShot1()
                      }}
                    >
                        <Text>async获取图片</Text>
                    </TouchableOpacity>
                    <Text style={styles.item}>大家好1</Text>
                    <Text style={styles.item}>大家好2</Text>
                    <Text style={styles.item}>大家好3</Text>
                    <Text style={styles.item}>大家好4</Text>
                    <Text style={styles.item}>大家好5</Text>
                    <Image
                        style={styles.img1}
                        source={require('../img/e2.png')}
                    />
                    <Text style={styles.item}>大家好6</Text>
                    <Text style={styles.item}>大家好7</Text>
                    <Text style={styles.item}>大家好8</Text>
                    <Text style={styles.item}>大家好9</Text>
                    <Text style={styles.item}>大家好10</Text>
                </View>
            </ScrollView>
        )
    }

    screenShot() {
        captureRef(this.refs['full'],{
            format: 'png',
            quality: 1.0,
            result: 'tmpfile',
            snapshotContentContainer: true,
        }).then((path)=>{
            console.log('------',path)
            this.setState({
                tip: '成功: '+path,
                screenImage: path,
            })
        }).catch((error)=>{
            this.setState({
                tip: '失败: '+error
            })
        })
    }

    //RN好像是单线程的
    screenShot1() {
        setTimeout(()=>{
            this.screenShot()
        },1000)
    }

    renderScreenImage() {
        if (this.state.screenImage.length > 0) {
            return (
                <Image
                    style={styles.img1}
                    source={{uri: this.state.screenImage}}
                />
            )
        } else {
            return (
                <Image
                    style={styles.img1}
                    source={require('../img/e2.png')}
                />
            )
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width,
        backgroundColor: '#5383ff'
    },
    img1: {
        width: width*0.9,
        height:200,
        backgroundColor: '#8d4dfc',
        resizeMode: 'contain'
    },
    item: {
        height: 100,
        width: width*0.9,
        marginTop: 10,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        fontSize: 20,
        lineHeight: 60,
    }
})