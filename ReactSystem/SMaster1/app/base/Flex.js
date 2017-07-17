/**
 * Created by wangxuan on 2017/7/15.
 */

import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'

export default class Flex extends Component {

    render() {
        return (
            <View style={styles.main}>

                <Text style={[styles.basetext,styles.textOne]}> 1 </Text>

                <Text style={[styles.basetext,styles.textTwo]}> 2 </Text>

                <Text style={[styles.basetext,styles.textThree]}> 3 </Text>

                <Text style={[styles.basetext,styles.textFour]}> 4 </Text>

                <Text style={[styles.basetext,styles.textFive]}> 5 </Text>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    main: {
        flexWrap: 'wrap',
        flexDirection: 'column',
        borderColor: '#ff0000',
        flex: 1,
        backgroundColor: '#fedcba',
        borderRadius: 20,
        margin: 10,
        padding:10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    basetext: {
        color: '#456789',
        fontSize: 24,
        padding:10,
        borderWidth: 4,
        borderColor: '#987654',
        borderRadius: 6,
        margin:10
    },
    textOne: {
        flex:1
    },
    textTwo: {
        flex:2,
        alignSelf: 'flex-start',
    },
    textThree: {
        flex:2,
        alignSelf: 'flex-end',
    },
    textFour: {
        flex:1,
        marginLeft: 400
    },
    textFive: {
        flex:1,
        marginRight: 400
    },
})