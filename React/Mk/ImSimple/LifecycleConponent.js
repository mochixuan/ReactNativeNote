import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

/*生命周期*/
/*http://www.devio.org/2016/08/10/React-Native%E4%B9%8BReact%E9%80%9F%E5%AD%A6%E6%95%99%E7%A8%8B-(%E4%B8%AD)/*/
export default class LifecycleConponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count:0,
        }
        console.log("----------constructor==在组件挂载之前调用一次,返回值将会作为 this.state 的初始值");
    }

    componentWillMount(){
        console.log("----------componentWillMount==服务器端和客户端都只调用一次,在初始化渲染执行之前立刻调用");
    }

    componentDidMount(){
        console.log("----------componentDidMount==在初始化渲染执行之后立刻调用一次,仅客户端有效（服务器端不会调用");
    }

    componentWillReceiveProps(nextProps) {
        console.log("----------componentWillReceiveProps==在组件接收到新的 props 的时候调用。在初始化渲染的时候，该方法不会调用");
    }

    shouldComponentUpdate(nextProps,nextState) {
        console.log("----------shouldComponentUpdate==在接收到新的 props 或者 state，将要渲染之前调用");
        return true;
    }

    componentWillUpdate(nextProps,nextState) {
        console.log("----------componentWillUpdate==在接收到新的 props 或者 state 之前立刻调用");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("----------componentDidUpdate==在组件的更新已经同步到 DOM 中之后立刻被调用");
    }

    componentWillUnmount() {
        console.log("----------componentWillUnmount==在组件从 DOM 中移除的时候立刻被调用");
    }

    render() {
        console.log("----------render==组件渲染");
        return <View>
            <Text style={{
                fontSize:20,
                backgroundColor:'red'}}
                onPress={()=>{
                    this.setState({
                        count:this.state.count+1,
                    })
                }}
            >单机我</Text>
            <Text style={{
                fontSize:20,
                backgroundColor:'yellowgreen'
            }}>被单机了{this.state.count}次</Text>
        </View>
    }
}
