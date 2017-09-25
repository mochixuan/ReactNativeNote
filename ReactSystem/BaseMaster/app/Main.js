import React,{Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Platform,
    ToastAndroid,
} from 'react-native'

export default class Main extends Component {

    getButton(text,onPress) {
        return (
            <TouchableHighlight
                underlayColor='rgba(77,94,255,0.5)'
                onPress={()=>onPress()}
                style={styles.button_view}>
                <Text style={styles.button_text}>{text}</Text>
            </TouchableHighlight>
        )
    }

    show(data) {
        ToastAndroid.show(data,ToastAndroid.SHORT);
    }

    render() {

        const itemView = [
            this.getButton("Main1",()=>{this.show("单机")}),
            this.getButton("WParallaxScrollView",()=>{this.props.navigation.navigate("WParallaxScrollView")}),
            this.getButton("WParallaxScrollView1",()=>{this.props.navigation.navigate("WParallaxScrollView1")}),
            this.getButton("WParallaxScrollView2",()=>{this.props.navigation.navigate("WParallaxScrollView2")}),
            this.getButton("WHeaderScrollView",()=>{this.props.navigation.navigate("WHeaderScrollView")}),
            this.getButton("BrowerImage",()=>{this.props.navigation.navigate("BrowerImage")}),
            this.getButton("AnimateSample1",()=>{this.props.navigation.navigate("AnimateSample1")}),
        ]

        return (
            <View style={styles.container}>
                {
                    itemView.map((item,i)=>{
                        return <View key={i}>{item}</View>
                    })
                }
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        margin: 8,
        flex: 1,
    },
    button_view: {
        padding: 6,
        margin:4,
        backgroundColor: '#4d5eff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,

    },
    button_text: {
        fontSize: 18,
        fontWeight:'600',
        color: '#f0f0f0'
    }
})