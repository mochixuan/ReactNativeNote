/**
 * Created by wangxuan on 2017/7/30.
 */
import React, {Component} from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    ActivityIndicator,
} from "react-native";

export default class Detail extends Component {

    render() {
        const {params} = this.props.navigation.state;
        return (
            <Text>{params.movieId}</Text>
        )
    }

}