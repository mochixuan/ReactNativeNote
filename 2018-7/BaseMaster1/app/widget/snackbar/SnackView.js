import React,{Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    Animated,
    Easing,
} from 'react-native'
import {TOOLBAR_HEIGHT,IOS_PADDING_TOP,IN_OUT_DURATION,SnackBar} from './Constants'
const {width} = Dimensions.get('window')
const PropTypes = require('prop-types')

class SnackView extends Component{

    constructor(props) {
        super(props)

        this.state = {
            animatedValue: new Animated.Value(0)
        }
    }

    componentDidMount() {
        this.startAnimate(true)
        this.hide()
    }

    render() {
        return (
            <Animated.View style={[styles.container,{
                opacity: this.state.animatedValue.interpolate({
                    inputRange: [0,1],
                    outputRange: [0,this.props.opacity]
                },this.props.shadow ? styles.shadow : {}),
                transform: [
                    {
                        translateY: this.state.animatedValue.interpolate({
                            inputRange: [0,1],
                            outputRange: [-TOOLBAR_HEIGHT,0],
                            easing: Easing.in(Easing.cubic)
                        })
                    }
                ]
            }]}>
                <Text style={styles.title}>{this.props.message}</Text>
            </Animated.View>
        )
    }

    startAnimate(isStart) {
        if (this.viewAnimate) {
            this.viewAnimate.stop()
        }
        this.viewAnimate = Animated.timing(
            this.state.animatedValue,
            {
                toValue: isStart ? 1 : 0,
                duration: IN_OUT_DURATION,
            }
        )
        this.viewAnimate.start()
    }

    hide () {
        this.hideTimeout = setTimeout(()=>{
            this.startAnimate(false)
        },this.props.duration)
    }

    componentWillUnmount() {
        if (this.viewAnimate) {
            this.viewAnimate.stop()
        }
        if (this.hideTimeout) {
            clearTimeout(this.hideTimeout)
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: width,
        height: TOOLBAR_HEIGHT,
        paddingTop: IOS_PADDING_TOP,
        alignItems: 'center',
        backgroundColor: '#fff',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 99,
        paddingLeft: 6,
        paddingRight: 6,
    },
    title: {
        fontSize: 16,
        color: "#222"
    },
    shadow: {
        elevation: 2,

        shadowOffset:{ width: 0, height: 1},
        shadowColor:'black',
        shadowOpacity:0.2,
        shadowRadius:1,
    }
})

SnackView.defaultProps = {
    message: '',
    duration: SnackBar.LENGTH_SHORT,
    opacity: 1.0,
    shadow: true
}

SnackView.propTypes = {
    message: PropTypes.string,
    duration: PropTypes.number,
    opacity: PropTypes.number,
    shadow: PropTypes.bool
}

export default SnackView


