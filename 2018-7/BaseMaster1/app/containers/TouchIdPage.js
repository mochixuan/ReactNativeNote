import React,{Component} from 'react'
import {
    View,
    Text,
    Dimensions
} from 'react-native'
import TouchID from 'react-native-touch-id'
import FingerprintScanner from 'react-native-fingerprint-scanner';
import {getButtonStyle} from "../base/BaseStyle";
const {width,height} = Dimensions.get('window')

export default class TouchIdPage extends Component{

    render() {
        return (
            <View style={{flex: 1,alignItems: 'center'}}>
                <View style={{
                    width,
                    justifyContent:'center',
                    alignItems: 'center',
                    height:44,
                    backgroundColor: '#222'
                }}>
                    <Text style={{fontSize:24,color: '#fff'}}>{'指纹识别'}</Text>
                </View>
                {
                    getButtonStyle('指纹识别1',()=>{
                        const optionalConfigObject = {
                            unifiedErrors: false // use unified error messages (default false)
                        }
                        TouchID.isSupported()
                            .then((biometryType)=>{
                                // Success code
                                if (biometryType === 'FaceID') {
                                    console.warn('FaceID is supported.');
                                } else if (biometryType === 'TouchID') {
                                    console.warn('TouchID is supported.');
                                } else if (biometryType === true) {
                                    // Touch ID is supported on Android
                                    console.warn('TouchID is supported');
                                }
                            }).catch((error)=>{
                                console.warn('isSupported Error',error)
                            })


                        const reason = '指纹解锁'
                        const authenticateOpt = {
                            title: "指纹识别打开APP", // Android
                            imageColor: "#e00606", // Android
                            imageErrorColor: "#ff0000", // Android
                            sensorDescription: "指纹识别描述", // Android
                            sensorErrorDescription: "解锁识别", // Android
                            cancelText: "取消", // Android
                            fallbackLabel: "", // iOS (if empty, then label is hidden)
                            unifiedErrors: false, // use unified error messages (default false)
                            passcodeFallback: false // iOS
                        }
                        TouchID.authenticate(reason,authenticateOpt)
                            .then((success)=>{
                                console.warn('authenticate success',success)
                            }).catch((error)=>{
                                console.warn('authenticate Error',error)
                            })
                    })
                }
                {
                    getButtonStyle('指纹识别2',()=>{
                        FingerprintScanner
                            .isSensorAvailable()
                            .then((biometryType)=>{
                                // Success code
                                if (biometryType === 'Face ID') {
                                    console.warn('FaceID is supported.');
                                } else if (biometryType === 'Touch ID') {
                                    console.warn('TouchID is supported.');
                                } else if (biometryType === 'Fingerprint') {
                                    // Touch ID is supported on Android
                                    console.warn('TouchID is supported');
                                }
                            }).catch((error)=>{
                                console.warn('isSupported Error',error)
                            })

                        FingerprintScanner
                            .authenticate({
                                onAttempt: this.androidAttempt
                            })
                            .then(()=>{
                                console.warn("authenticate Success")
                            }).catch((error)=>{
                                console.warn('authenticate Error',error.message)
                            })
                    })
                }
            </View>
        )
    }

    componentWillUnmount() {
        FingerprintScanner.release();
    }

    androidAttempt = () => {
        console.warn('androidAttempt')
    }

}
