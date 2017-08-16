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
    insertStudent,
    queryStudent,
} from './tool/RealmManager'

export default class RealmTest1 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            input1: "",
            input2: "",
            input3: "",
        }
    }

    render() {
        return (
            <ScrollView style={CommonStyles.contains}>
                <TextInput
                    style={CommonStyles.textinput}
                    underlineColorAndroid="transparent"
                    placeholder="firstName"
                    onChangeText={(input1)=>this.setState({input1})}
                />
                <TextInput
                    style={CommonStyles.textinput}
                    underlineColorAndroid="transparent"
                    placeholder="lastName"
                    onChangeText={(input2)=>this.setState({input2})}
                />
                <TextInput
                    style={CommonStyles.textinput}
                    underlineColorAndroid="transparent"
                    placeholder="age"
                    onChangeText={(input3)=>this.setState({input3})}
                />
                <WButton
                    text="保存"
                    onPress={()=> {
                        const input1 = this.state.input1;
                        const input2 = this.state.input2;
                        const input3 = this.state.input3;
                        if (input1 == null || input1 == "") {
                            Toast.show("请1先输入数据")
                        } else if (input2 == null || input2 == "") {
                            Toast.show("请2先输入数据")
                        } else if (input3 == null || input3 == "") {
                            Toast.show("请3先输入数据")
                        } else {
                            /*
                             * 版本 1
                             * insertStudent(input1,input2,input3)
                             */
                            /*
                             * 版本2
                             * */
                            insertStudent(input1 + " " + input2, input3)
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
                            /*
                             *版本1
                             *let cars = queryStudent(input1);
                             * */
                            /*
                             * 颁布2
                             * */
                            let cars = queryStudent();
                            if (cars == null || cars.length == 0) {
                                Toast.show("数据为空")
                            } else {
                                let datas = ""
                                cars.map((item, i)=> {
                                    /*
                                     * 版本1
                                     * datas = datas+"第"+i+"条数据："+item.firstName+":"+item.lastName+":"+item.age+'\n';
                                     * */
                                    /*
                                     * 版本2
                                     * */
                                    datas = datas + "第" + i + "条数据：" + item.name + ":" + item.age + '\n';
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
                            Toast.show("删除" + input1 + "成功")
                        }

                    }}
                />
            </ScrollView>
        )
    }

}


