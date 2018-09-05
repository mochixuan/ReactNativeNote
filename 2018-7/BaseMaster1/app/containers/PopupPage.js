import React,{Component} from 'react'
import {
    View,
    StyleSheet,
    Text,
    Dimensions
} from 'react-native'
import {getButtonStyle} from "../base/BaseStyle";
import RootSiblings from 'react-native-root-siblings';
import SnackBar from '../widget/snackbar/SnackBar'
const {width,height} = Dimensions.get('window')

export default class PopupPage extends Component{

    constructor(props) {
        super()
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    getButtonStyle('Toast',()=>{
                        SnackBar.show("床前明月光，疑是地上霜！",SnackBar.LENGTH_LONG,1)
                    })
                }
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