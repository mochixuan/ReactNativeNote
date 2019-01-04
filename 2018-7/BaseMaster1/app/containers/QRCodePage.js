import React,{Component} from 'react'
import {
    View,
    Dimensions,
    Text
} from 'react-native'
import QRCode from 'react-native-qrcode'
import QRCode1 from 'react-native-qrcode-svg';
const {width,height} = Dimensions.get('window')

const dataJSON = {"version":3,"id":"08191def-8205-4884-9d5b-de78041c99f1","address":"65fbfb3c9bd4c8a762821558772ce7ce57a1e5df","Crypto":{"ciphertext":"20162e46a8793501d973aaca19587a33699f8842b65b2fe8d9e32b6e31f8f133","cipherparams":{"iv":"fee6f672c83fd03c43678e3aa94bab2a"},"cipher":"aes-128-ctr","kdf":"scrypt","kdfparams":{"dklen":32,"salt":"e047a67120a890bb2ff7d03812f63653042b9c5a48f4b7fc5ab7026c6811dacc","n":8192,"r":8,"p":1},"mac":"5c75faa18dcf748fa01983e0c989df4a2ae388062fce8c32145d45c354ebb34a"}}

export default class QRCodePage extends Component {

    componentDidMount() {

    }

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
                        value={JSON.stringify(dataJSON)}
                        size={width*0.6}
                        bgColor={"black"}
                        fgColor={"white"}
                    />
                </View>
                <View style={{
                    borderRadius: 10,
                    padding: 10,
                    backgroundColor: '#fff',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <QRCode1
                        value={JSON.stringify(dataJSON)}
                        size={width*0.6}
                        color={"black"}
                        backgroundColor={"white"}
                    />
                </View>

            </View>
        )
    }
}
