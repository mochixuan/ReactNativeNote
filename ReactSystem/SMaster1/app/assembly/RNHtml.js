import React,{Component} from 'react'
import {
    StyleSheet,
    ToastAndroid,
    Text
} from 'react-native'
import HTMLView from 'react-native-htmlview'

export default class RNHtml extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const htmlContent = `<p><a href="http://baidu.com">百度</a></p>`
        return (
            <HTMLView
                value={htmlContent}
                style={styles.htmlView}
                onLinkPress={(url)=>{
                    this.show("单机："+url)
                }}
                onLinkLongPress={(url)=>{
                    this.show("长按："+url)
                }}
            />
        )
    }

    show(data) {
        ToastAndroid.show(data,ToastAndroid.SHORT)
    }

}

const styles = StyleSheet.create({
    htmlView: {
        fontWeight: 'bold',
        color: '#dd5e4d',
        fontSize: 24,
    }
})
