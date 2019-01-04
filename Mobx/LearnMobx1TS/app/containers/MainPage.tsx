import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
<<<<<<< HEAD
=======
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
>>>>>>> 4d4b5dc951c9a1f49b8d3c77dae0277e1dddf12e
import { getButtonStyle } from '../base/BaseStyle';
import { LoginStore } from '../store/LoginStore';

const { width, height } = Dimensions.get('window');
<<<<<<< HEAD

const ethers = require('ethers');

interface IProps {
    loginStore: LoginStore;
    navigation: NavigationScreenProp<any>;
=======

interface IProps {
  loginStore: LoginStore;
  navigation: NavigationScreenProp<any>;
>>>>>>> 4d4b5dc951c9a1f49b8d3c77dae0277e1dddf12e
}

@inject('loginStore')
@observer
class MainPage extends Component<IProps, any> {
<<<<<<< HEAD

    public componentWillMount() {
      // const mWeb3 = new Web3();
    }

    public render() {
        return (
=======

  public render () {
    return (
>>>>>>> 4d4b5dc951c9a1f49b8d3c77dae0277e1dddf12e
            <View style={styles.container}>
                {
                    this.props.loginStore.isLogin ? (
                    <Text style={styles.tip1}>已登陆</Text>
                    ) : (
                            <View style={{ alignItems: 'center' }}>
                                <Text style={styles.tip}>{this.getLoginState()}</Text>
                                {
<<<<<<< HEAD
                                    getButtonStyle('LogingetButtonStyle', () => {
                                        this.props.loginStore.login();
=======
                                    getButtonStyle('Login', () => {
                                      this.props.loginStore.login();
>>>>>>> 4d4b5dc951c9a1f49b8d3c77dae0277e1dddf12e
                                    })
                                }
                            </View>
                        )
                }
                {
                    getButtonStyle('TodoPage', () => {
<<<<<<< HEAD
                      // ——忽略该行以下所有代码出现的错误提示
                      // tslint:disable 
                      //tslint:disable-line
                // tslint: disable - line

              this.props.navigation.navigate('TodoPage');
                  })
      }
            </View>
        );
    }

    public getLoginState() {
        if (this.props.loginStore.isLoginState === 'done') {
            return '未登录';
        } else if (this.props.loginStore.isLoginState === 'doing') {
            return '登录中 ... ';
        } else {
            return '登录失败';
        }
=======
                      this.props.navigation.navigate('TodoPage');
                    })
                }
            </View>
    );
  }

  public getLoginState () {
    if (this.props.loginStore.isLoginState === 'done') {
      return '未登录';
    } else if (this.props.loginStore.isLoginState === 'doing') {
      return '登录中 ... ';
    } else {
      return '登录失败';
>>>>>>> 4d4b5dc951c9a1f49b8d3c77dae0277e1dddf12e
    }
  }

}

const styles = StyleSheet.create({
<<<<<<< HEAD
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
});

export default MainPage;
=======
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 10
  },
  tip: {
    color: '#f00',
    fontSize: 18
  },
  tip1: {
    color: '#2d75ff',
    fontSize: 18
  }
});

export default MainPage;
>>>>>>> 4d4b5dc951c9a1f49b8d3c77dae0277e1dddf12e
