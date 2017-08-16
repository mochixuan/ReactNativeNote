import React,{Component} from 'react'
import {
    Text,
    View,
    ScrollView,
    TextInput,
    AsyncStorage,
} from 'react-native'

import WButton from '../../base/WButton'
import CommonStyles from '../../../common/CommonStyles'
import Toast from '../../../utils/ToastUtil'

/*
 * AsyncStorage
 * 1.AsyncStorage 是一个简单的、异步的、持久化的 Key-Value 存储系统，它对于 App 来说是全局性的。
 * 2.由于它的操作是全局的，官方建议我们最好针对 AsyncStorage 进行一下抽象的封装再使用，而且不是直接拿 AsyncStorage 进行使用.
 *3.AsyncStorage 存储的位置根据系统的不同而有所差异。iOS 中的存储类似于 NSUserDefault，通过 plist 文件存放在设备中。Android 中会存储在 RocksDB 或者 SQLite 中，取决于你使用哪个.
 *
 * */

export default class WAsyncStorage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            input1: "",
            input2: "",
        }
    }

    getItem(key) {
        AsyncStorage.getItem(key, function (error, result) {
            if (error) {
                Toast.show("查询错误")
            } else {
                Toast.show("查询成功: " + result)
            }
        })
    }

    //asyn await
    async asynGetItem(key) {
        let datas = await AsyncStorage.getItem(key);
        if (datas !== null) {
            Toast.show("没有该数据")
        } else {
            Toast.show(datas)
        }
    }

    setItem(key, value) {
        AsyncStorage.setItem(key, value, function (error) {
            if (error) {
                Toast.show("插入错误")
            } else {
                Toast.show("插入成功")
            }
        })
    }

    removeItem(key) {
        AsyncStorage.removeItem(key, function (error) {
            if (error) {
                Toast.show("移除失败")
            } else {
                Toast.show("移除成功")
            }
        })
    }

    /*合并现有值和输入值*/
    mergeItem(key, value) {
        AsyncStorage.mergeItem(key, value, function (error) {
            if (error) {
                Toast.show("合并失败")
            } else {
                Toast.show("合并成功")
            }
        })
    }

    /*清理所以*/
    clear() {
        AsyncStorage.clear(function (error) {
            if (error) {
                Toast.show("清理失败")
            } else {
                Toast.show("清理成功")
            }
        })
    }

    /*获取所有的键*/
    getAllKeys() {
        AsyncStorage.getAllKeys(function (error,keys) {
            let datas = ""
            keys.map((item,i)=>{
                datas=datas+item+' ';
            })
            Toast.show(datas)
        })
    }

    /*清除所有进行中的查询操作*/
    flushGetRequests() {
        AsyncStorage.flushGetRequests();
    }

    /*获取多项，其中 keys 是字符串数组，比如：['k1', 'k2']*/
    multiGet(keys) {
        AsyncStorage.multiGet(keys,function (errors,result) {
            if (errors) {
                Toast.show("查询失败")
            } else {
                let datas=""
                result.map((item,i)=>{
                    datas=datas+item;
                })
                Toast.show(datas)
            }
        })
    }

    /*设置多项，其中 keyValuePairs 是字符串的二维数组，比如：[['k1', 'val1'], ['k2', 'val2']]*/
    // multiSet(keyValuePairs, callback:(errors))

    /*删除多项，其中 keys 是字符串数组，比如：['k1', 'k2']*/
    //multiRemove(keys, callback:(errors))

    /*多个键值合并，其中 keyValuePairs 是字符串的二维数组，比如：[['k1', 'val1'], ['k2', 'val2']]*/
    //multiMerge(keyValuePairs, callback:(errors))

    render() {
        return (
            <ScrollView style={CommonStyles.contains}>
                <TextInput
                    style={CommonStyles.textinput}
                    underlineColorAndroid="transparent"
                    placeholder="请输入key"
                    onChangeText={(input1)=>this.setState({input1})}
                />
                <TextInput
                    style={CommonStyles.textinput}
                    underlineColorAndroid="transparent"
                    placeholder="请输入value"
                    onChangeText={(input2)=>this.setState({input2})}
                />
                <WButton
                    text="保存"
                    onPress={()=> {
                        const data1 = this.state.input1;
                        const data2 = this.state.input2;
                        if (data1 == null || data1 == "") {
                            Toast.show("请输入key")
                        } else if (data2 == null || data2 == "") {
                            Toast.show("请输入value")
                        } else {
                            this.setItem(data1, data2)
                        }
                    }}
                />
                <WButton
                    text="查询"
                    onPress={()=> {
                        const data = this.state.input1;
                        if (data == null || data == "") {
                            Toast.show("请输入数据")
                        } else {
                            this.getItem(data)
                        }
                    }}
                />
                <WButton
                    text="Async查询"
                    onPress={()=> {
                        const data = this.state.input1;
                        if (data == null || data == "") {
                            Toast.show("请输入数据")
                        } else {
                            this.asynGetItem(data)
                        }
                    }}
                />
                <WButton
                    text="移除"
                    onPress={()=> {
                        const data = this.state.input1;
                        if (data == null || data == "") {
                            Toast.show("请输入数据")
                        } else {
                            this.removeItem(data)
                        }
                    }}
                />
                <WButton
                    text="合并"
                    onPress={()=> {
                        const data1 = this.state.input1;
                        const data2 = this.state.input2;
                        if (data1 == null || data1 == "") {
                            Toast.show("请输入key")
                        } else if (data2 == null || data2 == "") {
                            Toast.show("请输入value")
                        } else {
                            let datas = '{' + 'id:'+ data1+ ',name:'+data2 +'}';
                            this.mergeItem(data1, JSON.stringify(data1))
                        }
                    }}
                />
                <WButton
                    text="清理所以"
                    onPress={()=> {
                        this.clear()
                    }}
                />
                <WButton
                    text="查询所以键"
                    onPress={()=> {
                        this.getAllKeys()
                    }}
                />
                <WButton
                    text="查询多个"
                    onPress={()=> {
                        const data1 = this.state.input1;
                        const data2 = this.state.input2;
                        if (data1 == null || data1 == "") {
                            Toast.show("请输入key")
                        } else if (data2 == null || data2 == "") {
                            Toast.show("请输入value")
                        } else {
                            let datas = [];
                            datas.push(data1)
                            datas.push(data2)
                            this.multiGet(datas)
                        }
                    }}
                />
            </ScrollView>
        )
    }

}


