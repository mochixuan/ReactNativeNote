import React,{Component} from 'react'
import {
    View,
    StyleSheet,
    Text,
    Platform,
    TouchableOpacity,
    TouchableHighlight,
    TouchableNativeFeedback
} from 'react-native'
const PropTypes = require('prop-types')

export default class Button extends Component {

    render() {
        if (this.view) return this.view
        const touchableStyle = this.props.defaultStyle ? styles.default_touchable : [styles.base_touchable,this.props.style]
        if (this.props.isNativeFeedback && Platform.OS === "android") {
            this.view =  (
                <TouchableNativeFeedback onPress={()=>{if (this.props.onPress) this.props.onPress()}}
                                         onLongPress={()=>{ if (this.props.onLongPress) this.props.onLongPress() }}>
                    <View style={touchableStyle}>
                        <Text style={styles.base_text}>{this.props.text}</Text>
                    </View>
                </TouchableNativeFeedback>
            )
        } else if (this.props.underlayColor){
            this.view = (
                <TouchableHighlight onPress={()=>{if (this.props.onPress) this.props.onPress()}}
                                    onLongPress={()=>{ if (this.props.onLongPress) this.props.onLongPress() }}
                                    style={touchableStyle}
                                    underlayColor = {this.props.underlayColor}>
                    <Text style={styles.base_text}>{this.props.text}</Text>
                </TouchableHighlight>
            )
        } else {
            this.view = (
                <TouchableOpacity onPress={()=>{ if (this.props.onPress) this.props.onPress()}}
                                  onLongPress={()=>{ if (this.props.onLongPress) this.props.onLongPress() }}
                                  style={touchableStyle}>
                    <Text style={styles.base_text}>{this.props.text}</Text>
                </TouchableOpacity>
            )
        }
        return this.view
    }

}

Button.defaultProps = {
    isNativeFeedback: true,
    defaultStyle: true
}

Button.propTypes = {
    isNativeFeedback: PropTypes.bool,
    onPress: PropTypes.func,
    onLongPress: PropTypes.func,
    underlayColor: PropTypes.string,
    text: PropTypes.string,
    defaultStyle: PropTypes.bool
}

const styles = StyleSheet.create({
    base_touchable: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    base_text: {
        fontSize: 16,
        color: '#ffffff',
        padding: 10,
        paddingLeft: 16,
        paddingRight: 16,
    },
    default_touchable: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: '#34ceff',
    },
})