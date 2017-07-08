import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class StateTest extends Component {

    state = {
        name:'小王',
        size:80
    }

    constructor(props) {
        super(props);
        /*this.state={
            name:'小王'
        }*/
    }

    render() {
        return <View>
            <Text style={{
                fontSize:20,
                backgroundColor:'blue'}}
                  onPress={()=>{
                      this.setState({
                          size:this.state.size+10
                      })
                  }}
            >单机我 {this.state.name} {this.state.size}</Text>
            <Image
                style={{
                    width:this.state.size,
                    height:this.state.size,}}
                source={require('./a7.png')}
            />
        </View>
    }
}

