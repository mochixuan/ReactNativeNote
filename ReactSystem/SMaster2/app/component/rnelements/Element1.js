import React,{Component} from 'react'
import {
    StyleSheet,
    ScrollView,
    View,
} from 'react-native'
import {show} from '../../utils/ToastUtil'
import {
    Avatar
} from 'react-native-elements'

export default class Element1 extends Component {

    render() {
        return (
            <ScrollView style={styles.scroll_view}>
                <View style={styles.base_view_h}>
                    <Avatar
                        source={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}}
                         //small large medium
                        width={48}
                        height={48}
                        containerStyle={{
                            backgroundColor: '#15b3ff'
                        }}
                        //圆型
                        rounded={true}
                        onPress={()=>{
                            show("点击1")
                        }}
                        avatarStyle={{

                        }}
                        //按压时
                        activeOpacity={0.7}
                    />
                    <Avatar
                        medium
                        containerStyle={{
                            backgroundColor: '#15b3ff'
                        }}
                        title="TY"
                        titleStyle={{
                            color: '#ff4e03'
                        }}
                        //圆型
                        rounded={true}
                        onPress={()=>{
                            show("点击1")
                        }}
                        avatarStyle={{

                        }}
                        //按压时
                        activeOpacity={0.7}
                    />
                    {/*<Avatar
                        medium
                        icon={{
                            name: 'Mcx',
                            color: '#ff4e03',
                        }}
                        overlayContainerStyle={{
                            backgroundColor: '#128fc7'
                        }}
                        containerStyle={{
                            flex: 1,
                        }}
                        //圆型
                        rounded={true}
                        onPress={()=>{
                            show("点击1")
                        }}
                        //按压时
                        activeOpacity={0.7}
                    />*/}
                </View>
            </ScrollView>
        )
    }

    sho

}

const styles = StyleSheet.create({
    scroll_view: {
        flex: 1,
        margin: 10,
    },
    base_view_h: {
        flex:1,
        justifyContent:'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 6,
        borderBottomColor: '#f5f5f5',
        padding:4,
    },
    base_view_v: {
        justifyContent:'center',
        alignItems: 'center',
        flexDirection: 'column',
        borderBottomWidth:4,
        borderBottomColor: '#f5f5f5',
        padding:6,
    }
})