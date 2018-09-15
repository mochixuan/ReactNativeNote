import React,{Component} from 'react'
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    LayoutAnimation,
    UIManager
} from 'react-native'
import {getButtonStyle} from "../base/BaseStyle";
import SnackBar from "../widget/snackbar/SnackBar";

const {width,height} = Dimensions.get('window')

export default class LayoutAnimatePage extends Component{

    constructor(props) {
        super()

        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true); //安卓兼容

        this.state = {
            itemViews: [{},{}],
            width: 10,
            height: 10,
        }
    }

    componentWillUpdate(nextProps,nextState) {
        //LayoutAnimation.easeInEaseOut();
        this.refreshBefore();
    }

    render() {
        return (
            <View style={{flex: 1,alignItems: 'center'}}>
                <View style={{
                    width: this.state.width,
                    height: this.state.height,
                    backgroundColor: '#f00',
                    borderRadius: 2,
                    marginTop: 10,
                }}/>
                {
                    getButtonStyle('Base',()=>{
                        //LayoutAnimation.easeInEaseOut();
                        //LayoutAnimation.spring();
                        this.setState({
                            width: this.state.width+10,
                            height: this.state.height+10,
                        })
                    })
                }
                {
                    getButtonStyle('Animate ReMove',()=>{
                        //LayoutAnimation.easeInEaseOut();
                        //LayoutAnimation.spring();
                        this.setState({
                            itemViews: this.state.itemViews.slice(0, -1)
                        })
                    })
                }
                {
                    getButtonStyle('Animate Add',()=>{
                        //LayoutAnimation.easeInEaseOut();
                        //LayoutAnimation.spring();
                        this.setState({
                            itemViews: [...this.state.itemViews,{}]
                        })
                    })
                }
                <View style={{flexDirection: 'row',flexWrap: 'wrap',width: width}}>
                    {
                        this.state.itemViews.map((item,index)=>{
                            return (
                                <View key = {index} style={{
                                    width: 100,
                                    height: 100,
                                    backgroundColor: '#f00',
                                    borderRadius: 2,
                                    margin: 8,
                                }}/>
                            )
                        })
                    }
                </View>
            </View>
        )
    }

    refreshBefore = () => {
        const config = {
            duration: 3000, //持续时间
            create: {
                type: LayoutAnimation.Types.spring,
                //springDamping: 0.4,
                property: LayoutAnimation.Properties.scaleXY,
            },
            update: {
                type: LayoutAnimation.Types.spring,
                //springDamping: 0.4,
                property: LayoutAnimation.Properties.opacity,
            },
            // delete: {
            //     type: LayoutAnimation.Types.spring,
            //     //springDamping: 0.4,
            //     property: LayoutAnimation.Properties.scaleXY,
            // }
        }
        LayoutAnimation.configureNext(config)
    }

}