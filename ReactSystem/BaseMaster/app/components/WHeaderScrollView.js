import React,{Component} from 'react'
import {
    Image,
    View,
    Text,
} from 'react-native'

import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view'

export default class WHeaderScrollView extends Component {

    render(){
        return (
            <HeaderImageScrollView
                maxHeight={240}
                minHeight={54}
                overlayColor= 'blue'
                maxOverlayOpacity={1}
                fadeOutForeground={true}
                foregroundParallaxRatio={0.7}
                renderHeader={() => (
                    <Image
                        source={{
                            height:240,
                            flex:1,
                            uri:'http://gaopin-preview.bj.bcebos.com/133108772254.jpg'
                        }} />
                )}
                renderFixedForeground={()=><Text style={{
                    color:'red',
                    padding:10,
                }}>asasas</Text>}
            >
                <View style={{ height: 1000 }}>
                    <TriggeringView onHide={() => console.log('text hidden')} >
                        <Text>Scroll Me!</Text>
                    </TriggeringView>
                </View>
            </HeaderImageScrollView>
        )
    }

}