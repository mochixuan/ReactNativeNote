/**
 * Created by wangxuan on 2017/7/28.
 */

import {StackNavigator} from 'react-navigation'
import Detail from './components/Detail'
import Main from './components/Main'
import Home from './components/Home'
import Recommend from './components/Recommend'
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator'

const setup = StackNavigator({
    Main: {screen:Main},
    Home: {screen:Home},
    Detail: {screen:Detail},
    Recommend: {screen:Recommend}
},{
    navigationOptions:{
        gesturesEnabled: true,
    },
    headerMode: 'none',
    transitionConfig:()=>{
        screenInterpolator: CardStackStyleInterpolator.forHorizontal
    },
})

export default setup
