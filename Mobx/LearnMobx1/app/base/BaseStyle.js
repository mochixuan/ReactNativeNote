import React,{Component} from 'react'
import {StyleSheet,Dimensions,TouchableOpacity,Text} from 'react-native'

const {width}  = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    button: {
        width: width*0.6,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7da6ff',
        borderRadius: 2,
        marginTop: 20,
    },
    button_text: {
        fontSize: 18,
        color: '#fff'
    },
})

export const getButtonStyle = (text,click) => {
    return (
        <TouchableOpacity style={styles.button} onPress={()=> {
            if (click != null) {
                click()
            }
        }}>
            <Text style={styles.button_text}>{text}</Text>
        </TouchableOpacity>
    )
}