import React,{Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    FlatList,
    RefreshControl,
} from 'react-native'
import * as Animatable from 'react-native-animatable'
import {getButtonStyle} from "../base/BaseStyle";
const {width} = Dimensions.get('window')

const itemHeight = 48
export default class AnimatablePage extends Component{

    constructor(props){
        super(props)

        this.isRequestData = false
        this.headerIndex = 10
        this.FooterIndex = 10
        this.datas = [
            '故人西辞黄鹤楼',
            '烟花三月下扬州',
            '十年生死两茫茫',
            '问君能有几多愁',
            '恰似一江春水向东流',
            '人生若只如初见',
            '何事秋风悲画扇',
            '曾经沧海难为水',
            '除却巫山不是云',
            '明月几时有',
            '把酒问青天',
            '恰同学少年',
            '风华正茂',
            '夜来风雨声',
            '花落知多少',
        ]
        const datas = this.datas.map((item,index)=>item+" "+10)
        this.state = {
            opacity: 1,
            refreshing: false,
            datas: datas,
        }
    }

    componentDidMount() {

    }

    other() {
        return (
            <View style={{flex: 1,alignItems: 'center',marginTop: 15,}}>
                <Animatable.Text
                    animation="slideInDown"
                    iterationCount={5}
                    direction="alternate">Up and down you go</Animatable.Text>
                <Animatable.Text
                    animation="pulse"
                    easing="ease-out"
                    iterationCount="infinite"
                    style={{ textAlign: 'center' }}>❤️</Animatable.Text>
                <Animatable.View ref='bounceMe'>
                    <Text>Bounce Me!</Text>
                </Animatable.View>
                {
                    getButtonStyle('Click1',()=>{
                        this.refs['bounceMe'].bounce(800)
                            .then((endState)=>{
                                //console.warn(endState)
                            })
                    })
                }
                <Animatable.Text ref='bounceMe1' style={{
                    opacity: this.state.opacity,
                }}>Opacity</Animatable.Text>
                {
                    getButtonStyle('Click2',()=>{
                        this.refs['bounceMe1'].transitionTo({ opacity: 0.2 })
                    })
                }
                <Animatable.View ref='bounceMe2' style={{
                    width:width-30,
                    marginLeft: 15,
                    height: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 4,
                    backgroundColor: '#9a47ff'
                }}>
                    <Text>Bounce Me!</Text>
                </Animatable.View>
                {
                    getButtonStyle('Click1',()=>{
                        this.refs['bounceMe2'].bounceInUp(800)
                    })
                }
            </View>
        )
    }

    render() {
        return (
            <View style={{flex: 1,alignItems: 'center'}}>
                <FlatList
                    data = {this.state.datas}
                    keyExtractor = {(item,index)=> index.toString()}
                    renderItem={({item,index}) => this._renderItemView(item,index)}
                    getItemLayout={(data,index)=> ({length: itemHeight,offset: (itemHeight+0.5)*index,index})}
                    showsVerticalScrollIndicator={false}
                    onEndReachedThreshold = {0.05}
                    refreshControl = {this._refreshControlView()}
                    onEndReached = {()=>{
                        this.requestData(false)
                    }}
                />
            </View>
        )
    }

    requestData(isPull) {
        if (!this.isRequestData) {
            this.isRequestData = true
            this.setState({
                refreshing: true
            })
            setTimeout(()=>{
                let datas = []
                if (isPull) {
                    this.headerIndex = this.headerIndex - 1
                    datas = this.datas.map((item,index)=>item+"  "+this.headerIndex)
                } else {
                    this.FooterIndex = this.FooterIndex + 1
                    datas = this.datas.map((item,index)=>item+"  "+this.FooterIndex)
                }

                this.setState({
                    datas: isPull ? [...datas,...this.state.datas] : [...this.state.datas,...datas],
                    refreshing: false,
                },()=>{
                    this.isRequestData = false
                    if (isPull) {

                    }
                })
            },3000)
        }
    }

    _refreshControlView() {
        return (
            <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={() => {
                    this.requestData(true)
                }}
                colors={['#e7455f','#3fbf3d', '#4f52a7']}
            />
        )
    }

    _renderItemView(item,index){
        return (
            <Animatable.View
                style={styles.item}
                animation="zoomIn"
                duration={300}
                delay={(index%this.datas.length)*100}>
                <Text style={styles.item_text}>{item}</Text>
            </Animatable.View>
        )
    }

}

const styles = StyleSheet.create({
    item: {
        height: itemHeight,
        width: width-30,
        backgroundColor: '#ff6548',
        justifyContent: 'center',
        paddingLeft: 15,
        borderRadius: 2,
        opacity: 0,
        borderBottomWidth: 0.5,
        borderColor:'#6c71ff',
    },
    item_text: {
        fontSize: 18,
        color: '#fff',
    },
    item_separator: {
        width: width - 30,
        height: 0.5,
        backgroundColor: '#6c71ff'
    },
})