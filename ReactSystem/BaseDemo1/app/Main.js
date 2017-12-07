import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    Platform,
    ToastAndroid,
} from 'react-native'
import NaviBarView from './components/NaviBarView'

export default class Main extends Component {

    render() {

        const itemView = [
            this._renderButtonView("Main",()=>{this.show("单机")}),
            this._renderButtonView("PermissionAndroidView",()=>{this.props.navigation.navigate("PermissionAndroidView")}),
            this._renderButtonView("NotificationView",()=>{this.props.navigation.navigate("NotificationView")}),
            this._renderButtonView("JNotificationView",()=>{this.props.navigation.navigate("JNotificationView")}),
            this._renderButtonView("FileDownView",()=>{this.props.navigation.navigate("FileDownView")}),
            this._renderButtonView("NativeMethodView",()=>{this.props.navigation.navigate("NativeMethodView")}),
        ]

        return (
            <View style={styles.container}>
                <NaviBarView/>
                {
                    itemView.map((item,i)=>{
                        return <View key={i}>{item}</View>
                    })
                }
            </View>
        )
    }

    _renderButtonView(text,onPress) {
        return (
            <TouchableHighlight
                underlayColor="rgba(77,94,225,0.5)"
                onPress={()=>onPress()}
                style={styles.button_view}>
                <Text style={styles.button_text}>{text}</Text>
            </TouchableHighlight>
        )
    }

    show(data) {
        ToastAndroid.show(data,ToastAndroid.SHORT)
    }

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        margin: 8,
    },
    button_view: {
        padding: 6,
        margin: 4,
        backgroundColor: '#5fc0a5',
        alignItems: 'center',
        borderRadius:4,
    },
    button_text: {
        fontSize: 18,
        fontWeight: '600',
        color: '#f0f0f0',
    }

})