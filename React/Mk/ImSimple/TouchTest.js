import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Alert,
    TouchableHighlight,
    TouchableNativeFeedback
} from 'react-native';

export default class TouchTest extends Component {

    constructor(props) {
        super(props);
        this.state={
            count:0
        }
    }

    render() {
        return <View>

            <TouchableWithoutFeedback
                onPress={()=>{
                    this.setState({count:this.state.count+1})
                }}
                onLongPress={()=>{
                    Alert.alert('提示','长按删除',
                        [{text:'取消',onPress:()=>{
                            style:'cancle'}},
                        {text:'确定',onPress:()=>{}}])
                }}>
                <View style={styles.button}>
                    <Text style={styles.bottonText}>
                        我是TouchableWithoutFeedback
                    </Text>
                </View>
            </TouchableWithoutFeedback>
            <Text style={styles.text}>你单机了{this.state.count}</Text>

            <TouchableWithoutFeedback
                onPressIn={()=> {
                    this.setState({text:'触摸开始',startTime:new Date().getTime()})
                }}
                onPressOut={()=>{
                    this.setState({text:'触摸结束,持续时间:'+(new Date().getTime()-this.state.startTime)+'毫秒'})
                }}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        点我
                    </Text>
                </View>
            </TouchableWithoutFeedback>
            <Text style={styles.text}>{this.state.text}</Text>

            <TouchableHighlight
                activeOpacity={0.7} //单机后
                underlayColor='green'   //单机后
                onHideUnderlay={()=>{
                    this.setState({text:'衬底被隐藏'})
                }}
                onShowUnderlay={()=>{
                    this.setState({text:'衬底显示'})
                }}
                onPress={()=>{

                }}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        TouchableHighlight
                    </Text>
                </View>
            </TouchableHighlight>
            <Text style={styles.text}>{this.state.text}</Text>

            {/*水波纹*/}
            <TouchableNativeFeedback
                onPress={()=>{
                    this.setState({count: this.state.count + 1})
                }}
                background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={styles.button}>
                    <Text>TouchableNativeFeedback</Text>
                </View>
            </TouchableNativeFeedback>
            <Text style={styles.text}>测试{this.state.text}</Text>

        </View>
    }
}

const styles = StyleSheet.create({
    button:{
        borderWidth:1
    },
    bottonText:{
        fontSize:18
    },
    text:{
        fontSize:20
    }
})

