import React, {Component} from 'react'
import {Dimensions, StyleSheet, View , Text} from 'react-native'
import {getButtonStyle} from "../base/BaseStyle";
import {inject,observer} from 'mobx-react'

const {width,height} = Dimensions.get('window')

@inject(["loginStore"])
@observer
class MainPage extends Component{

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