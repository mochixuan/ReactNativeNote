import React, {Component} from 'react'
import {Dimensions, Share, StyleSheet, View,NativeModules} from 'react-native'
import {getButtonStyle} from "../base/BaseStyle";
import FastImage from 'react-native-fast-image'
import Modal from 'react-native-modal'
import WTextView from '../widget/WTextView'

const {width,height} = Dimensions.get('window')
const imgMap = new Map()
const WTestModule = NativeModules.WTestModule

export default class WidgetPage extends Component{

    constructor(props) {
        super(props)

        this.state = {
            refreshUi: false,
            isShowModal: false,
            imgUrl: 'http://n.sinaimg.cn/news/700/w900h600/20180716/-Es2-hfkffak6096891.jpg'
        }

        const datas = [
            {a: 0,b: 0},
            {a: 1,b: 1},
            {a: 2,b: 2},
            {a: 3,b: 3},
            {a: 4,b: 4},
        ]

        const newData = Object.keys(datas)
        //console.warn(newData)

    }

    render() {
        return (
            <View style={styles.container}>
                {
                    getButtonStyle('Native Share',()=>{
                        Share.share({
                            message: '我是莫辞旋',
                            title: '测试原生分享',
                            url: 'https://github.com/mochixuan',
                        }).then((data)=>{
                            console.warn(data)
                        }).catch((error)=>{
                            console.warn(error)
                        })
                    })
                }
                <FastImage
                    style={{
                        width: width,
                        height: imgMap.has(this.state.imgUrl) ? imgMap.get(this.state.imgUrl)*width : 300,
                        backgroundColor: '#f0ffff',
                        marginTop: 10,
                    }}
                    onLoad={(event)=>{
                        imgMap.set(this.state.imgUrl,event.nativeEvent.height/event.nativeEvent.width)
                    }}
                    onLoadEnd = {()=>{
                        if (imgMap.has(this.state.imgUrl)) {
                            this.setState({
                                refreshUi: !this.state.refreshUi,
                            })
                        }
                    }}
                    source={{
                        uri: this.state.imgUrl,
                    }}
                    resizeMode={FastImage.resizeMode.contain}/>
                {
                    getButtonStyle('Modal',()=>{
                        this.setState({
                            isShowModal: !this.state.isShowModal
                        })
                    })
                }
                {this.renderModalView ()}
                <WTextView
                    style={{
                        width: 300,
                        height: 100,
                    }}
                    //color={'#ff0000'}
                    text={'我是原生Ui: Text'}
                    fontSize={18}
                    isAlpha={false}
                />
                {
                    getButtonStyle('WTestModule',()=>{
                        WTestModule.setTestMap({
                            name: 'mochixuan',
                            age: 24,
                            isMarriage: true,
                            yuwen: [10,11,12]
                        },(data)=>{
                            console.warn(data)
                        })

                    })
                }
            </View>
        )
    }

    renderModalView () {
        return (
            <Modal
                backdropColor={'#000'}
                backdropOpacity={0.5}
                animationIn="zoomInDown"
                animationOut="zoomOutUp"
                animationInTiming={1000}
                animationOutTiming={1000}
                backdropTransitionInTiming={1000}
                backdropTransitionOutTiming={1000}
                onBackdropPress={()=>{
                    //按压空白地方
                    this.setState({
                        isShowModal: false,
                    })
                }}
                onBackButtonPress={()=>{
                    //按压返回按钮
                    this.setState({
                        isShowModal: false,
                    })
                }}
                isVisible={this.state.isShowModal} >
                <View style={styles.modal}></View>
            </Modal>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    modal: {
        width: width-30,
        marginLeft: 15,
        height: height - 100,
        backgroundColor: '#ff6548',
        borderRadius: 2,
    },
})