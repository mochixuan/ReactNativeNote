import React,{Component} from 'react'
import {
    View,
    Text,
    Image
} from 'react-native'
import {getButtonStyle} from "../base/BaseStyle";

export default class LifeCyclePage extends Component{

    componentWillMount() {
        console.warn('componentWillMount')
    }

    constructor(props) {
        super()

        this.state = {
            refreshUi: false
        }

        console.warn('constructor')
    }

    componentDidMount() {
        console.warn('componentDidMount')
    }

    componentWillReceiveProps() {
        console.warn('componentWillReceiveProps')
    }

    shouldComponentUpdate() {
        console.warn('shouldComponentUpdate')
        return true
    }

    componentWillUpdate() {
        console.warn('componentWillUpdate')
    }

    componentDidUpdate() {
        console.warn('componentDidUpdate')
    }

    componentWillUnmount() {
        console.warn('componentWillUnmount')
    }

    render() {
        return (
            <View style={{flex: 1,alignItems: 'center'}}>
                {
                    getButtonStyle('refreshUi State',()=>{
                        this.setState({
                            refreshUi: !this.state.refreshUi
                        })
                    })
                }
            </View>
        )
    }

}