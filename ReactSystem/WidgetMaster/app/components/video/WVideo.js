/**
 * Created by wangxuan on 2017/8/16.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native'
import Video from 'react-native-video'
import Toast from '../../utils/ToastUtil'

export default class WVideo extends Component {

    render() {
        //videoUri = "http://video.pearvideo.com/head/20170414/cont-1064396-10371532.mp4"
        videoUri = "http://v9-tt.ixigua.com/f41c8815da9482e1d47cf49ce84f2ef4/5994f22b/video/m/220937d214e9e6f4a438e1e18e0e8787664114ed2900001916f34ae6f5/"
        return (
            <View style={styles.container}>
                <Video
                     source={{uri:videoUri}}         // 视频的URL地址，或者本地地址，都可以.
                     rate={1.0}                      // 控制暂停/播放，0 代表暂停paused, 1代表播放normal
                     volume={1.0}                    // 声音的放大倍数，0 代表没有声音，就是静音muted, 1 代表正常音量 normal，更大的数字表示放大的倍数
                     muted={false}                   // true代表静音，默认为false.
                     paused={false}                  // true代表暂停，默认为false
                     resizeMode="contain"            // 视频的自适应伸缩铺放行为，
                     repeat={true}                   // 是否重复播放
                     playInBackground={false}        // 当app转到后台运行的时候，播放是否暂停
                     //playWhenInactive={false}      // [iOS] Video continues to play when control or notification center are shown. 仅适用于IOS
                     onLoadStart={this.loadStart}    // 当视频开始加载时的回调函数
                     onLoad={this.setDuration}       // 当视频加载完毕时的回调函数
                     onProgress={this.setTime}       //  进度控制，每250ms调用一次，以获取视频播放的进度
                     onEnd={this.onEnd}              // 当视频播放完毕后的回调函数
                     onError={this.videoError}       // 当视频不能加载，或出错后的回调函数
                     style={styles.video}
                 />
            </View>
        );
    }

    loadStart() {
        Toast.show("视频加载开始")
    }

    setDuration() {
        Toast.show("视频加载完毕")
    }

    setTime() {

    }

    onEnd() {
        Toast.show("视频播放完毕")
    }

    videoError() {
        Toast.show("视频加载错误")
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    video:{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});