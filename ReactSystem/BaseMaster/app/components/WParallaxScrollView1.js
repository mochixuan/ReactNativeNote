import React, { Component } from 'react';
import {
    Dimensions,
    Image,
    ListView,
    PixelRatio,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import ParallaxScrollView from 'react-native-parallax-scroll-view';

class WParallaxScrollView1 extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }).cloneWithRows([
                'Simplicity Matters',
                'Hammock Driven Development',
                'Value of Values',
                'Are We There Yet?',
                'The Language of the System',
                'Design, Composition, and Performance',
                'Clojure core.async',
                'The Functional Database',
                'Deconstructing the Database',
                'Hammock Driven Development',
                'Value of Values'
            ])
        };
    }

    render() {
        const { onScroll = () => {} } = this.props;
        return (
            <ParallaxScrollView
                style={{
                    flex: 1,
                    backgroundColor: 'hotpink',
                    overflow: 'hidden'
                }}
                renderBackground={() =>
                    <Image
                        source={{
                            uri: `https://placekitten.com/414/350`,
                            width: window.width,
                            height: 300 }}
                    />}
                renderFixedHeader={() =>
                    <Text style={{
                        textAlign: 'right',
                        color: 'white',
                        padding: 5,
                        fontSize: 20
                    }}>Hello</Text>}
                renderForeground={()=>
                    <View style={{
                        backgroundColor: 'red',
                        height:54,
                        flex:1,
                    }}>

                    </View>
                }
                stickyHeaderHeight={50}

                parallaxHeaderHeight={ 300 }>
                <View style={{
                    alignItems: 'center',
                    height:1000,
                }}>
                    <Text style={{ fontSize: 30 }}>Meow!</Text>
                </View>
            </ParallaxScrollView>
        );
    }
}

const window = Dimensions.get('window');

const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 350;
const STICKY_HEADER_HEIGHT = 70;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: window.width,
        height: PARALLAX_HEADER_HEIGHT
    },
    stickySection: {
        height: STICKY_HEADER_HEIGHT,
        width: 300,
        justifyContent: 'flex-end'
    },
    stickySectionText: {
        color: 'white',
        fontSize: 20,
        margin: 10
    },
    fixedSection: {
        position: 'absolute',
        bottom: 10,
        right: 10
    },
    fixedSectionText: {
        color: '#999',
        fontSize: 20
    },
    parallaxHeader: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        paddingTop: 100
    },
    avatar: {
        marginBottom: 10,
        borderRadius: AVATAR_SIZE / 2
    },
    sectionSpeakerText: {
        color: 'white',
        fontSize: 24,
        paddingVertical: 5
    },
    sectionTitleText: {
        color: 'white',
        fontSize: 18,
        paddingVertical: 5
    },
    row: {
        overflow: 'hidden',
        paddingHorizontal: 10,
        height: ROW_HEIGHT,
        backgroundColor: 'white',
        borderColor: '#ccc',
        borderBottomWidth: 1,
        justifyContent: 'center'
    },
    rowText: {
        fontSize: 20
    }
});

export default WParallaxScrollView1;