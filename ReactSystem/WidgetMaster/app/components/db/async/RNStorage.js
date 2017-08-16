import React,{Component} from 'react'
import {
    Text,
    View,
    ScrollView,
    TextInput,
    AsyncStorage,
} from 'react-native'
import Storage from 'react-native-storage'

import WButton from '../../base/WButton'
import CommonStyles from '../../../common/CommonStyles'
import Toast from '../../../utils/ToastUtil'

let userA = {
    name: "",
    age: 20,
    tags: []
}

export default class RNStorage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            input1: "",
            input2: "",
        }
    }

    // 使用key来保存数据。这些数据一般是全局独有的，常常需要调用的。
    // 除非你手动移除，这些数据会被永久保存，而且默认不会过期。
    // 注意:请不要在key中使用_下划线符号!

    // 使用key和id来保存数据，一般是保存同类别（key）的大量数据。
    // 所有这些"key-id"数据共有一个保存上限（无论是否相同key）
    // 即在初始化storage时传入的size参数。
    // 在默认上限参数下，第1001个数据会覆盖第1个数据。
    // 覆盖之后，再读取第1个数据，会返回catch或是相应的sync方法。
    //key:User相当于数据库的表
    save(name,tags) {
        userA.name = name
        userA.tags.push(tags)
        userA.tags.push(tags+"1")
        storage.save({
            key:'User',
            id: name,
            data:userA,
            // 如果不指定过期时间，则会使用defaultExpires参数
            // 如果设为null，则永不过期
            expires: null
        })
    }

    load(name) {
        storage.load({
            key: 'User',
            id: name,
            // autoSync(默认为true)意味着在没有找到数据或数据过期时自动调用相应的sync方法
            //autoSync: true,
            // syncInBackground(默认为true)意味着如果数据过期，
            // 在调用sync方法的同时先返回已经过期的数据。
            // 设置为false的话，则等待sync方法提供的最新数据(当然会需要更多时间)。
            //syncInBackground: true,
        }).then(ret=>{
            Toast.show(ret.name+"\n"+ret.age+"\n"+ret.tags)
        }).catch(err=>{
            // 如果没有找到数据且没有sync方法，
            // 或者有其他异常，则在catch中返回
            switch (err.name) {
                case 'NotFoundError':
                    Toast.show("NotFoundError")
                    break;
                case 'ExpiredError':
                    Toast.show("ExpiredError")
                    break;
                default:
                    Toast.show("default")
                    break;
            }
        })
    }

    // 获取某个key下的所有id
    getIdsForKey() {
        storage.getIdsForKey('User').then(ids => {

        });
    }

    // 获取某个key下的所有数据
    getAllDataForKey() {
        storage.getAllDataForKey('User').then(users => {

        });
    }

    // !! 清除某个key下的所有数据
    clearMapForKey() {
        storage.clearMapForKey('User');
    }

    //删除单个数据
    remove() {
        //1
        storage.remove({
            key: 'User'
        });
        //2
        storage.remove({
            key: 'user',
            id: '1001'
        });
    }

    // !! 清空map，移除所有"key-id"数据（但会保留只有key的数据）
    clearMap() {
        storage.clearMap();
    }

    //同步远程数据（刷新）
    sync() {
        storage.sync = {
            // sync方法的名字必须和所存数据的key完全相同
            // 方法接受的参数为一整个object，所有参数从object中解构取出
            // 这里可以使用promise。或是使用普通回调函数，但需要调用resolve或reject。
            user(params){
                let { id, resolve, reject, syncParams: { extraFetchOptions, someFlag } } = params;
                fetch('user/', {
                    method: 'GET',
                    body: 'id=' + id,
                    ...extraFetchOptions,
                }).then(response => {
                    return response.json();
                }).then(json => {
                    //console.log(json);
                    if(json && json.user){
                        storage.save({
                            key: 'user',
                            id,
                            data: json.user
                        });

                        if (someFlag) {
                            // 根据syncParams中的额外参数做对应处理
                        }

                        // 成功则调用resolve
                        resolve && resolve(json.user);
                    }
                    else{
                        // 失败则调用reject
                        reject && reject(new Error('data parse error'));
                    }
                }).catch(err => {
                    console.warn(err);
                    reject && reject(err);
                });
            }
        }
    }

    getBatchData() {
        // 使用和load方法一样的参数读取批量数据，但是参数是以数组的方式提供。
// 会在需要时分别调用相应的sync方法，最后统一返回一个有序数组。
        storage.getBatchData([
            { key: 'loginState' },
            { key: 'checkPoint', syncInBackground: false },
            { key: 'balance' },
            { key: 'user', id: '1009' }
        ])
            .then(results => {
                results.forEach( result => {
                    console.log(result);
                })
            })

//根据key和一个id数组来读取批量数据
        storage.getBatchDataWithIds({
            key: 'user',
            ids: ['1001', '1002', '1003']
        }).then()
    }

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
                            this.save(data1,data2)
                        }
                    }}
                />

                <WButton
                    text="查询"
                    onPress={()=> {
                        const data1 = this.state.input1;
                        const data2 = this.state.input2;
                        if (data1 == null || data1 == "") {
                            Toast.show("请输入key")
                        } else {
                            this.load(data1)
                        }
                    }}
                />

            </ScrollView>
        )
    }

}


