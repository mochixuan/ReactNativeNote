import React,{Component} from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    Dimensions,
} from 'react-native'
import SelectImageView from './SelectImageView'
const {width,height} = Dimensions.get('window')

const TEXT = "人生若只如初见，何事秋风悲画扇。\n" +
    "等闲变却故人心，却道故人心易变。\n" +
    "骊山语罢清宵半，泪雨零铃终不怨。\n" +
    "何如薄幸锦衣郎，比翼连枝当日愿。"

export default class SortPage extends Component{

    constructor(props) {
        super()

        const imageItems = []

        for (let i = 0;i<18;i++) {
            imageItems.push({
                icon: require('../data/img/ic_launcher_round.png'),
                text: i
            })
        }

        this.state = {
            imageItems: imageItems,
            isEnterEdit: false,
            scrollEnabled: true
        }
    }

    render() {
        return (
            <ScrollView
                ref={(scrollView)=> this.scrollView = scrollView}
                style={{flex: 1}}
                //canCancelContentTouches={false}
                //nestedScrollEnabled={true}
                scrollEnabled = {this.state.scrollEnabled}
                >
                <Text style={styles.txt}>{TEXT}</Text>
                <Text style={styles.txt}>{TEXT}</Text>
                <Text style={styles.txt}>{TEXT}</Text>
                <Text style={styles.txt}>{TEXT}</Text>
                <Text style={styles.txt}>{TEXT}</Text>
                <View style={{marginLeft: 18}}>
                    <SelectImageView
                        dataSource={this.state.imageItems}
                        parentWidth={width-18}

                        childrenHeight={76}
                        childrenWidth= {76}

                        marginChildrenTop={7}
                        marginChildrenBottom={0}
                        marginChildrenLeft={0}
                        marginChildrenRight={7}
                        onDragStart={(startIndex,endIndex)=>{
                            if (!this.state.isEnterEdit) {
                                this.setState({
                                    isEnterEdit: true
                                })
                            }
                            this.setState({
                                scrollEnabled: false
                            })
                        }}
                        onDragEnd={(startIndex)=>{
                            this.setState({
                                scrollEnabled: true
                            })
                        }}
                        onDataChange = {(data)=>{
                            this.setState({
                                imageItems: data
                            })
                        }}
                        onClickItem={(item,index)=>{
                            const imageItems = [...this.state.imageItems]
                            imageItems.splice(index,1)
                            this.setState({
                                imageItems: imageItems
                            })
                        }}
                        renderItem={(item,index)=>{
                            return this.renderItem(item,index)
                        }}
                    />
                </View>
                <Text style={styles.txt}>{TEXT}</Text>
                <Text style={styles.txt}>{TEXT}</Text>
                <Text style={styles.txt}>{TEXT}</Text>
                <Text style={styles.txt}>{TEXT}</Text>
            </ScrollView>
        )
    }

    renderItem(item,index) {
        if (this.state.isEnterEdit) {
            return (
                <View style={styles.item}>
                    <Image
                        style={styles.item_icon}
                        source={item.icon}/>
                    <Image
                        style={styles.item_delete_icon}
                        source={require('../data/img/clear.png')}
                    />
                    <Text style={styles.item_text}>React  {item.text}</Text>
                </View>
            )
        } else {
            return (
                <View style={styles.item}>
                    <Image
                        style={styles.item_icon}
                        source={item.icon}/>
                    <Text style={styles.item_text}>React  {item.text}</Text>
                </View>
            )
        }

    }

}

const styles = StyleSheet.create({
    txt: {
        fontSize: 18,
        color: '#2c2c2c',
        lineHeight: 24,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
    },
    item: {
        alignItems: 'center'
    },
    item_delete_icon: {
        width: 14,
        height: 14,
        position: 'absolute',
        right: 0,
        top: 0,
    },
    item_icon: {
        width: 76,
        height: 76,
        resizeMode: 'cover',
        top: 20
    },
    item_text: {
        position: 'absolute',
        fontSize: 16,
        color: '#f00',
        fontWeight: 'bold',
    }
})