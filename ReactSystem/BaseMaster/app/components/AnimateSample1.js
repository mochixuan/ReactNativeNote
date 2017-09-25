import React,{Component} from 'react'
import {
    View,
    Text,
    Animated,
    TouchableOpacity,
    Dimensions,
    Image
} from 'react-native'

const {width,height}  = Dimensions.get('window')

export default class AnimateSample1 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            fadeAnim: new Animated.Value(1)
        }
    }

    render() {
        return (
            <View style={{flex:1,width:width,justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity onPress={()=>{
                    Animated.timing(
                        this.state.fadeAnim,
                        {
                            toValue:0,
                            duration:2000,
                        }
                    )
                }}>
                    <Text style={{padding:10,color:'#283d93',backgroundColor:'#666'}}>单机</Text>
                </TouchableOpacity>
                <Animated.Image
                    style={{
                        width:width,
                        flex:1,
                        resizeMode:'contain',
                        transform:[
                            {scale:this.state.fadeAnim}
                        ]
                    }}
                    source={{uri:'http://s14.sinaimg.cn/mw690/44b05c76tx6CrziX3rv5d&690'}}
                />
            </View>
        )
    }

}