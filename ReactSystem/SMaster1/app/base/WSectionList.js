/**
 * Created by wangxuan on 2017/7/17.
 */

import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    SectionList
} from 'react-native'

export default class WSectionList extends Component {

    constructor(props) {
        super(props)

        /*data 命名好像不能改*/
        let sections = [
            {title1:'W',data:['Wang',"Wang1"]},
            {title1:'X',data:['Xuan1','Xuan2','Xuan3','Xuan4']},
            {title1:'Y',data:['Yang1','Yang2','Yang3','Yang4']}
        ]

        this.state = {
            sections: sections
        }
    }

    render() {

        return (
            <View style={styles.main}>
                <SectionList
                    sections = {this.state.sections}
                    renderItem = {
                        ({item}) => <Text style={styles.item}>{item}</Text>
                    }
                    renderSectionHeader = {
                        ({section}) => <Text style={styles.sectionHeader}>{section.title1}</Text>
                    }
                />
            </View>
        )

    }

}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: 20,
    },
    sectionHeader: {
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#456789',
        backgroundColor: '#f0f0f0',
    },
    item: {
        padding: 10,
        fontSize: 16,
        height: 44,
    }
})