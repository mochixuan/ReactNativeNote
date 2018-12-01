import React,{Component} from 'react'
import {
    View,
    Dimensions,
    Text
} from 'react-native'
import QRCode from 'react-native-qrcode'
const {width,height} = Dimensions.get('window')

export default class QRCodePage extends Component {

    render() {
        return (
            <View style={{width,height,backgroundColor: '#000',alignItems: 'center'}}>
                <View style={{height: 60,justifyContent: 'center',alignItems: 'center'}}>
                    <Text style={{color: '#fff',fontSize: 20}}>一蓑烟雨任平生</Text>
                </View>
                <View style={{
                    borderRadius: 10,
                    padding: 10,
                    backgroundColor: '#fff',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <QRCode
                        value={'0x6AA81A90f300aa4e0C92f85ADbD44D8357e2963e'}
                        size={width*0.6}
                        bgColor={"black"}
                        fgColor={"white"}
                    />
                </View>
            </View>
        )
    }
}
