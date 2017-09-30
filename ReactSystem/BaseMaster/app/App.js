import {Component} from 'react'
import {
    StackNavigator
} from 'react-navigation'
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator'
import WParallaxScrollView from './components/WParallaxScrollView'
import WParallaxScrollView1 from './components/WParallaxScrollView1'
import WParallaxScrollView2 from './components/WParallaxScrollView2'
import WHeaderScrollView from './components/WHeaderScrollView'
import WNavigatorDawer from './components/WNavigatorDawer'
import BrowerImage from './components/BrowerImage'
import AnimateSample1 from './components/AnimateSample1'

import Main from './Main'

const App = StackNavigator({
    Main:{screen:Main},
    WParallaxScrollView:{screen:WParallaxScrollView},
    WParallaxScrollView1:{screen:WParallaxScrollView1},
    WParallaxScrollView2:{screen:WParallaxScrollView2},
    BrowerImage:{screen:BrowerImage},
    WHeaderScrollView:{screen:WHeaderScrollView},
    AnimateSample1:{screen:AnimateSample1},
    WNavigatorDawer:{screen:WNavigatorDawer},
},{
    navigationOptions: {
        gesturesEnabled: true,
    },
    headerMode: 'none',
    transitionConfig:()=>{
        screenInterpolator: CardStackStyleInterpolator.forHorizontal
    }
})

export default App