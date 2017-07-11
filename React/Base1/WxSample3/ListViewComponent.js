/**
 * Created by wangxuan on 2017/7/11.
 */
import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
} from 'react-native';

export default class ListViewComponent extends Component {

    constructor(props) {
        super(props);
        let movies = [
            {title:'摔跤吧，爸爸'},
            {title:'猿星崛起'},
            {title:'天下无贼'},
            {title:'Andriod从入门到放弃'},
            {title:'全栈工程师艰辛之路'}
        ];

        let dataSource = new ListView.DataSource({
            rowHasChanged:(row1,row2) => row1 != row2
        });

        this.state = {
            movies: dataSource.cloneWithRows(movies),
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource = {this.state.movies}
                    renderRow = {
                        movies => <Text style={
                            styles.itemText
                        }>{movies.title}</Text>
                    }
                />
            </View>
        );
    };

}

let styles = StyleSheet.create({
    container: {
        alignItems:'center'
    },
    itemText: {
        alignSelf:'center',
        color:'#4321cf',
        padding:20,
        fontSize:33,
        fontWeight:'400',
        borderBottomWidth:4,
        borderBottomColor:'#33ffff',
    },
});