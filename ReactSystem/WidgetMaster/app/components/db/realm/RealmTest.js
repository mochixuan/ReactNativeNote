import React,{Component} from 'react'
import {
    Text,
    View,
    ScrollView,
    TextInput,
} from 'react-native'

import WButton from '../../base/WButton'
import CommonStyles from '../../../common/CommonStyles'
import Toast from '../../../utils/ToastUtil'
import {
    insertPersion,
    insertData,
    queryData,
    deleteData
} from './tools1/WRealm1'

export default class RealmTest extends Component {

    constructor(props) {
        super(props)
        this.state = {
            input1: "",
            input2: "",
            input3: "",
            input4: "",
        }
    }

    render() {
        return (
            <ScrollView style={CommonStyles.contains}>
                <TextInput
                    style={CommonStyles.textinput}
                    underlineColorAndroid="transparent"
                    placeholder="make"
                    onChangeText={(input1)=>this.setState({input1})}
                />
                <TextInput
                    style={CommonStyles.textinput}
                    underlineColorAndroid="transparent"
                    placeholder="model"
                    onChangeText={(input2)=>this.setState({input2})}
                />
                <TextInput
                    style={CommonStyles.textinput}
                    underlineColorAndroid="transparent"
                    placeholder="miles"
                    onChangeText={(input3)=>this.setState({input3})}
                />
                <TextInput
                    style={CommonStyles.textinput}
                    underlineColorAndroid="transparent"
                    placeholder="name"
                    onChangeText={(input4)=>this.setState({input4})}
                />
                <WButton
                    text="保存"
                    onPress={()=> {
                        const input1 = this.state.input1;
                        const input2 = this.state.input2;
                        const input3 = this.state.input3;
                        if (input1 == null || input1 == "") {
                            Toast.show("请1先输入数据")
                        } else if (input2 == null || input2 == ""){
                            Toast.show("请2先输入数据")
                        } else if (input3 == null || input3 == ""){
                            Toast.show("请3先输入数据")
                        } else {
                            insertData(input1,input2,input3)
                            Toast.show("数据保存成功")
                        }
                    }}
                />
                <WButton
                    text="查询数据"
                    onPress={()=> {
                        const input1 = this.state.input1;
                        if (input1 == null || input1 == "") {
                            Toast.show("请1先输入数据")
                        } else {
                            let cars = queryData(input1);
                            if (cars==null || cars.length==0) {
                                Toast.show("数据为空")
                            }else {
                                let datas = ""
                                cars.map((item,i)=>{
                                    datas = datas+"第"+i+"条数据："+item.make+":"+item.model+":"+item.miles+'\n';
                                })
                                Toast.show(datas)
                            }
                        }
                    }}
                />
                <WButton
                    text="删除数据"
                    onPress={()=> {
                        const input1 = this.state.input1;
                        if (input1 == null || input1 == "") {
                            Toast.show("请1先输入数据")
                        } else {
                            deleteData(input1)
                            Toast.show("删除"+input1+"成功")
                        }

                    }}
                />
                <WButton
                    text="保存Person"
                    onPress={()=> {
                        const input4 = this.state.input4;
                        if (input4 == null || input4 == "") {
                            Toast.show("请4先输入数据")
                        } else {
                            insertPersion(input4)
                            Toast.show("数据保存成功")
                        }
                    }}
                />
            </ScrollView>
        )
    }

}


