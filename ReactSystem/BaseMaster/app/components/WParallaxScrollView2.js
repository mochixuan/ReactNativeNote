import React,{Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Dimensions,
    ToastAndroid
} from 'react-native';

export const SCREEN_HEIGHT = Dimensions.get('window').height;
import ParallaxScrollView from 'react-native-parallax-scrollview';

export default class WParallaxScrollView2 extends Component {

    render() {
        return (
            <ParallaxScrollView
                windowHeight={SCREEN_HEIGHT * 0.4}
                backgroundSource='http://i.imgur.com/UyjQBkJ.png'
                navBarTitle='John Oliver'
                userName='John Oliver'
                userTitle='Comedian'
                navBarColor="#937eff"
                userImage='http://i.imgur.com/RQ1iLOs.jpg'
                leftIcon={{name: 'rocket', color: 'rgba(193, 193, 193, 1)', size: 30, type: 'font-awesome'}}
                rightIcon={{name: 'user', color: 'rgba(193, 193, 193, 1)', size: 30, type: 'font-awesome'}}
            >
                <ScrollView style={{flex: 1, backgroundColor: 'rgba(228, 117, 125, 1)'}}>
                    <View style={{height: 300, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 32, color: 'white'}}>Custom view</Text>
                    </View>
                    <View style={{height: 300, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 32, color: 'white'}}>keep going.</Text>
                    </View>
                    <View style={{height: 300, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 32, color: 'white'}}>keep going..</Text>
                    </View>
                    <View style={{height: 300, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 32, color: 'white'}}>keep going...</Text>
                    </View>
                    <View style={{height: 300, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 32, color: 'white'}}>the end! :)</Text>
                    </View>
                </ScrollView>
            </ParallaxScrollView>
        )
    }

}

const styles = StyleSheet.create ({
    headerTextView: {
        backgroundColor: 'transparent',
    },
    headerTextViewTitle: {
        fontSize: 35,
        color: 'white',
        fontWeight: '300',
        paddingBottom: 10,
        textAlign: 'center'
    },
    headerTextViewSubtitle: {
        fontSize: 20,
        color: 'white',
        fontWeight: '300'
    },
});
