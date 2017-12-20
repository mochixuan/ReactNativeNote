/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import LifecycleConponent from './LifecycleConponent';
//import MConponent,{WConponent,a,b,sum} from './EIConponent'
//import PropsTest from './PropsTest';
//import StateTest from './StateTest'
//import RefTest from './RefTest';
//import Student from './Student'
//import XuanStudent from './XuanStudent'
//import FlexTest from './FlexTest'
import TouchTest from './TouchTest'

export default class setup extends Component {

   /* render() {
        return <View style={styles.container}>
            <TouchTest/>
        </View>
    }*/

   render() {
       return (
           <LifecycleConponent/>
       )
   }

    /*render() {
        return <View style={styles.container}>
            <FlexTest/>
        </View>
    }*/

    /*constructor(props) {
        super(props);
        this.student = new Student('小王','男',24);
        this.xuanStudent = new XuanStudent();
    }

    render() {
        return <View style={styles.container}>
            <Text style={{
                fontSize:20,
            }}>{this.student.getDecription()}</Text>
            <Text style={{
                fontSize:20,
            }}>{this.xuanStudent.getDecription()}</Text>
        </View>
    }*/

    /*constructor(props) {
        super(props);
        this.state=({
            size:0
        })
    }
    //组件的ref是全局的可以通过refs加后缀获取
    render() {
        return <View style={styles.container}>
            <Text style={{
                fontSize:20,
                textColor:'#33ffff'}}
                  onPress={()=>{
                      //1.0 var size = this.refs.wreftest.getSize();
                      //1.1 var size = this.refs['wreftest'].getSize();
                      var size = this.wreftest.getSize();
                      this.setState({
                          size:size
                      })
                  }}
            >图片大小{this.state.size}</Text>
            <RefTest
                //1.2 ref="wreftest"
                ref={wreftest=>this.wreftest=wreftest}
            />
        </View>
    }*/

    /*render() {
        return <View style={styles.container}>
            <StateTest />
        </View>
    }*/

    //
    /*constructor(props) {
        super(props);
    }

    render() {
        var params={name:'小米',sex:'no',age:9};
        return <View style={styles.container}>
            <PropsTest
                //name="小米"
                {...params}
            />
        </View>
    }*/

    /*constructor(props){
        super(props);
        this.state = ({
            result:'2+3'
        })
    }*/

    /*render() {
        return (
            <View style={styles.container}>
                <MConponent/>
                <WConponent/>
                <Text style={{
                    fontSize:20
                }}>a:{a}</Text>
                <Text style={{
                    fontSize:20
                }}>b:{b}</Text>
                <Text style={{
                    fontSize:20,}}
                    onPress={()=>{
                        var result = sum(2,3);
                        this.setState({
                            result:result,
                        })
                    }}>{this.state.result}</Text>
            </View>
        );
    }*/
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        marginTop:0,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
