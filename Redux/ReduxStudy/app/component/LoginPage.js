import React,{Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ToastAndroid
} from 'react-native'

import {connect} from 'react-redux'
import {doLogin} from '../actions/login'
import * as ActionTypes from '../constants/ActionTypes'
import MainPage from "./MainPage";

class LoginPage extends Component {

    shouldComponentUpdate(nextProps,nextState) {
        if (nextProps.status === ActionTypes.LOGIN_DONE && nextProps.isSuccess) {
            this.props.navigation.navigate('MainPage', {user: nextProps.user})
            this.show("登入成功")
            return false;
        }
        return true;
    }

    render() {
        let tips = '数据异常';
        if (this.props.status === ActionTypes.LOGIN_INIT) {
            tips = '请登入'
        } else if (this.props.status === ActionTypes.LOGIN_DOING) {
            tips = '登入中...'
        } else if (this.props.status === ActionTypes.LOGIN_DONE){
            if (this.props.isSuccess === true){
                tips = '登入成功'
            } else {
                tips = '登入失败'
            }
        }

        const button = this.props.status == ActionTypes.LOGIN_DOING ? (
            <View></View>
        ) : (
            <TouchableOpacity
                style={{backgroundColor: '#ff0000',borderRadius: 10 ,marginTop: 10}}
                onPress={ ()=> {
                    this.props.dispatch(doLogin())
                }}>
                <View style={{alignItems: 'center',justifyContent: 'center',width:120,height: 60 }}>
                    <Text style={{color: '#ffffff',fontSize: 20}}>登入</Text>
                </View>
            </TouchableOpacity>
        )

        return (
            <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}>
                <Text>{tips}</Text>
                {button}
            </View>
        )
    }

    show(data) {
        ToastAndroid.show(data,ToastAndroid.SHORT)
    }

}

const mapStateToProps = (state)=> {
    return {
        status: state.login.status,
        isSuccess: state.login.isSuccess,
        user: state.login.user

    }
}

export default connect(mapStateToProps)(LoginPage)