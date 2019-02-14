import React,{PureComponent,Component} from 'react'
import {
    View,
    Text,
} from 'react-native'
import {getButtonStyle} from "../base/BaseStyle";

export default class WPureView extends PureComponent{

    constructor(props) {
        super()

        this.state = {
            data: [1,2,3]
        }
    }

    render() {
        console.warn("render")
        return (
            <View style={{height: 300}}>
                <Text style={{fontSize: 18,color: '#f00',alignSelf: 'center'}}>state: {[...this.state.data]}</Text>
                <Text style={{fontSize: 18,color: '#f00',alignSelf: 'center'}}>父props: {[...this.props.data]}</Text>
                {
                    getButtonStyle('修改State',()=>{
                        const data = this.state.data;
                        data.pop()
                        this.setState({
                            data: data
                        })
                    })
                }
            </View>
        )
    }

}
