import React,{Component} from 'react'
import {
    View,
    StyleSheet,
    Dimensions,
    StatusBar,
    TextInput,
    Text,
    ActivityIndicator,
    TouchableOpacity,
    BackHandler,
    Platform,
} from 'react-native'

const {width,height} = Dimensions.get('window')

export default class WebViewPage extends Component{

    render() {
        return (
            <View></View>
        )
    }

}


const text_color = '#f0f0f0'
const main_color = '#222222'
const minor_color = '#3aafff'
const main_half_color = 'rgba(255,255,255,0.5)'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: main_color
    },
    search: {
        height: 44,
        width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: main_color
    },
    search_view: {
        width: width*0.8,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#565656'
    },
    search_input: {
        flex: 1,
        marginLeft: 15,
        marginRight: 15,
        color: text_color,
        fontSize: 14,
        padding: 0
    },
    web_view: {
        flex: 1
    },
    bottom: {
        height: 49,
        width,
        backgroundColor: main_color,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottom_text: {
        color: text_color,
        fontSize: 18,
        fontWeight: 'bold'
    },
    loading: {
        flex: 1,
        width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: main_half_color,
        marginBottom: 10
    },
    base_text: {
        color: text_color,
        fontSize: 18,
        fontWeight: 'bold'
    },
    base_button: {
        height: 40,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 20,
        marginTop: 30,
        justifyContent: 'center',
        backgroundColor: minor_color
    }
})
