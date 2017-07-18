/**
 * Created by wangxuan on 2017/7/18.
 */

import React,{Component} from 'react'
import {
    StyleSheet,
    Image,
    View,
    Text,
    ImageBackground,
} from 'react-native'

export default class WImage extends Component {

    render() {

        let imguri = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white_fe6da1ec.png'

        return (
            <View style={styles.container}>
                <ImageBackground source={
                    require('../img/a5.png')
                }>
                    <Image
                        source={require('../img/a2.png')}
                    />
                    <Image
                        source={{
                            uri: imguri,
                            method: 'POST',
                            headers: {
                                Pragma: 'no-cache'
                            },
                            body: 'your'
                        }}
                        style={styles.image}
                    />
                </ImageBackground>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        alignItems: 'center'
    },
    image: {
        width: 200,
        height: 100,
        borderRadius:10,
        borderWidth: 2,
        borderColor: '#456789'
    }
})