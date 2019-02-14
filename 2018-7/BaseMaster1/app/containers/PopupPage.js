import React,{Component} from 'react'
import {
    View,
    StyleSheet,
    Text,
    Dimensions
} from 'react-native'
import {getButtonStyle} from "../base/BaseStyle";
import SnackBar from '../widget/snackbar/SnackBar'
const {width,height} = Dimensions.get('window')
import WPureView from '../components/WPureView'

export default class PopupPage extends Component{

    constructor(props) {
        super()

        this.state = {
            data: [1,2,3],
            refresh: false,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    getButtonStyle('Toast',()=>{
                        SnackBar.show("床前明月光，疑是地上霜！",SnackBar.LENGTH_LONG,1)
                    })
                }
                <Text style={{fontSize: 18,color: '#f00',alignSelf: 'center'}}>state: {[...this.state.data]}</Text>
                {
                    getButtonStyle('修改Pure',()=>{
                        const data = this.state.data
                        data.push(data.length+1)
                        this.setState({
                            data: data
                        })
                    })
                }
                {
                    getButtonStyle('修改Pure',()=>{
                        this.setState({
                            refresh: !this.state.refresh
                        })
                    })
                }
                <WPureView data = {this.state.data} />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },
    root: {
        width: 200,
        height: 100,
        borderRadius: 4,
        backgroundColor: '#ff0000',
        position: 'absolute',
        alignItems: 'center',
        top: -20,
        marginLeft: (width-200)/2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    root_text: {
        color: '#222',
        fontSize: 18
    }
})
