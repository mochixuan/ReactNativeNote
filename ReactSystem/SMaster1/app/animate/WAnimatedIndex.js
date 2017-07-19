/**
 * Created by wangxuan on 2017/7/19.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export default class WAnimatedIndex extends Component {

    /*navigationOptions: http://blog.csdn.net/sinat_17775997/article/details/70176688*/

    static navigationOptions = {
        title: '动画',
    }

    render() {

        const {navigate} = this.props.navigation;

        return(
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() =>
                        navigate('WAnimationAlphaScene')}
                    style={styles.button}>
                    <Text  style={styles.text}>Alpha动画</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() =>
                        navigate('WAnimatedSpringScene')}
                    style={styles.button}>
                    <Text  style={styles.text}>缩放动画</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() =>
                        navigate('WAnimationRotateScene')}
                    style={styles.button}>
                    <Text  style={styles.text}>旋转动画</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigate('WAnimationGroupScene')}
                    style={styles.button}>
                    <Text  style={styles.text}>组动画</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigate('WAnimationFrameScene')}
                    style={styles.button}>
                    <Text style={styles.text}>帧动画</Text>
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        alignItems: 'center',
    },
    button: {
        marginTop: 20,
        backgroundColor:'#48d1cc',
        height:48,
        width:140,
        borderRadius:5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#f5f5f5',
        fontWeight: 'bold'
    }
});