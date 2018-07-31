import {requireNativeComponent,ViewPropTypes} from 'react-native'
const PropTypes = require('prop-types')
import React,{Component} from 'react'

let BaseTextView = {
    name: 'WTextView',
    propTypes: {
        text: PropTypes.string,
        fontSize: PropTypes.number,
        color: PropTypes.number,
        isAlpha: PropTypes.bool,
        ...ViewPropTypes
    }
}
const RCTTextView = requireNativeComponent('WTextView',BaseTextView,{nativeOnly: {onChange: true}})

class WTextView extends Component{
    
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <RCTTextView
                {...this.props}
                onChange={(event)=>{
                    console.warn("tian")
                    console.warn("wang xuan: ",event.nativeEvent.message)
                }}
            />
        )
    }
    
    _onChange(event) {
        console.warn(event)
        if (event.nativeEvent.message === 'MyMessage') {
            console.warn("触摸事件",event)
        }
    }
    
}

export default WTextView

