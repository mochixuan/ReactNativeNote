import React, {Component} from 'react'
import {Dimensions, StyleSheet, View , Text,TextInput} from 'react-native'
import {getButtonStyle} from "../base/BaseStyle";
import {inject,observer} from 'mobx-react'
import Share from 'react-native-share'

import {Wallet,utils,HDNode} from 'ethers'

const {width,height} = Dimensions.get('window')

@inject(["loginStore"])
@observer
class MainPage extends Component{

    constructor(props) {
        super()

        this.state = {
            tip: '提示'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.props.loginStore.isLogin ? (
                        <Text style={styles.tip1}>已登陆</Text>
                    ) : (
                        <View style={{alignItems: 'center'}}>
                            <Text style={styles.tip}>{this.getLoginState()}</Text>
                            {
                                getButtonStyle('Login',()=>{
                                    this.props.loginStore.login()
                                })
                            }
                        </View>
                    )
                }
                {
                    getButtonStyle('TodoPage',()=>{
                        this.props.navigation.navigate('TodoPage')
                    })
                }
                {
                    getButtonStyle('GoBack1', () => {
                        this.props.navigation.popToTop()
                    })
                }
                <TextInput
                    multiline = {true}
                    style={styles.tip1}
                    value={this.state.tip}/>
                {
                    getButtonStyle('生成助记词',()=>{

                        const entropy = utils.randomBytes(16);
                        const mnemonic = HDNode.entropyToMnemonic(entropy);

                        const wallet = Wallet.fromMnemonic(mnemonic);

                        console.warn('助记词'+mnemonic+"\n"+
                            '私钥'+wallet.privateKey+"\n"+
                            '地址'+wallet.address)

                        this.setState({
                            tip: '助记词'+mnemonic+"\n"+
                                '私钥'+wallet.privateKey+"\n"+
                                '公钥'+wallet.publicKey+"\n"+
                                '地址'+wallet.address
                        })
                    })
                }
                {
                    getButtonStyle('Share',()=>{
                        const shareOptions = {
                            title: 'Share via',
                            url: 'some share url',
                            social: Share.Social.WHATSAPP,
                        };
                        Share.shareSingle (shareOptions);

                    })
                }
            </View>
        )
    }

    getLoginState() {
        if (this.props.loginStore.isLoginState == "done") {
            return "未登录"
        } else if (this.props.loginStore.isLoginState == "doing") {
            return "登录中 ... "
        } else {
            return "登录失败"
        }
    }

    async generateWallet() {

        // const entropy = utils.randomBytes(16);
        // const mnemonic = utils.HDNode.entropyToMnemonic(entropy);
        // const wallet = utils.fromMnemonic(mnemonic);
        //
        // const parentNode = ethers.utils.HDNode.fromMnemonic(mnemonic);
        // const childNode = parentNode.derivePath("m/44'/60'/0'/0/0");
        //
        // console.warn(childNode.privateKey);
        //
        // return;
        //
        // const wallet = new Wallet(childNode.privateKey);
        //
        // this.setState({
        //     tip: '助记词'+mnemonic+"\n"+
        //         '私钥'+wallet.privateKey+"\n"+
        //         '公钥'+wallet.publicKey+"\n"+
        //         '地址'+wallet.address+"\n"
        // })
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 10
    },
    tip: {
        color: '#f00',
        fontSize: 18,
    },
    tip1: {
        color: '#2d75ff',
        fontSize: 18
    }
})

export default MainPage
