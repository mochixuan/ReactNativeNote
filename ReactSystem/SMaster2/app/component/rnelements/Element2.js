import React,{Component} from 'react'
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    TouchableHighlight,
} from 'react-native'
import {show} from '../../utils/ToastUtil'
import {
    Button,
    Slider,
    SideMenu,
    SocialIcon,
    Tile,
} from 'react-native-elements'

export default class Element2 extends Component {

    constructor(props) {
        super(props);
        this.state={
            slider1: 0,
            isOpen:false,
        }
    }

    render() {

        return (
            <ScrollView style={styles.scroll_view}>
                <View style={styles.base_view_vb}>
                    <Slider
                        minimumValue={0}
                        maximumValue={100}
                        step={1}
                        value={this.state.slider1}
                        onValueChange={(value)=>{
                            this.setState({
                                slider1:value
                            })
                        }}
                    />
                    <Text>Value:{this.state.slider1}</Text>
                </View>
                <View style={styles.base_view_h}>
                    <SocialIcon
                        type='twitter'
                    />
                    <SocialIcon
                        raised={false}
                        type='gitlab'
                    />
                    <SocialIcon
                        light
                        type='medium'
                    />
                    <SocialIcon
                        light
                        raised={false}
                        type='medium'
                    />
                    <SocialIcon
                        title='Sign In With Facebook'
                        button
                        type='facebook'
                    />
                    <SocialIcon
                        title='Some Twitter Message'
                        button
                        type='twitter'
                    />
                    <SocialIcon
                        button
                        type='medium'
                    />
                    <SocialIcon
                        button
                        light
                        type='instagram'
                    />
                </View>
                <View style={styles.base_view_vb}>

                    <Tile
                        imageSrc={require('../../img/g3.jpg')}
                        title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
                        featured
                        caption="Some Caption Text"
                        height={140}
                        containerStyle={{
                            margin:6,
                        }}
                    />

                    <Tile
                        imageSrc={require('../../img/g3.jpg')}
                        icon={{name: 'play-circle', type: 'font-awesome'}}
                        featured
                        height={140}
                        containerStyle={{
                            margin:6,
                        }}
                    />

                    <Tile
                        imageSrc={require('../../img/g3.jpg')}
                        title="Lorem ipsum dolor sit amet, consectetur"
                        icon={{name: 'play-circle', type: 'font-awesome'}}  // optional
                        contentContainerStyle={{height: 70}}
                        height={140}
                        containerStyle={{
                            margin:6,
                        }}
                    >
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text>Caption</Text>
                            <Text>Caption</Text>
                        </View>
                    </Tile>

                </View>
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    scroll_view: {
        flex: 1,
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
    base_view_hb: {
        flex:1,
        flexDirection: 'row',
        borderBottomWidth: 6,
        borderBottomColor: '#f5f5f5',
    },
    base_view_v: {
        justifyContent:'center',
        alignItems: 'center',
        flexDirection: 'column',
        borderBottomWidth:4,
        borderBottomColor: '#f5f5f5',
        padding:6,
    },
    base_view_vb: {
        justifyContent:'center',
        flexDirection: 'column',
        borderBottomWidth:4,
        borderBottomColor: '#f5f5f5',
        padding:6,
    }
})