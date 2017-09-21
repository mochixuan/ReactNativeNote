import {Component} from 'react'
import {
    StackNavigator
} from 'react-navigation'
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator'
import WParallaxScrollView from './components/WParallaxScrollView'
import WParallaxScrollView1 from './components/WParallaxScrollView1'
import WParallaxScrollView2 from './components/WParallaxScrollView2'
import WHeaderScrollView from './components/WHeaderScrollView'

import Main from './Main'

const App = StackNavigator({
    Main:{screen:Main},
    WParallaxScrollView:{screen:WParallaxScrollView},
    WParallaxScrollView1:{screen:WParallaxScrollView1},
    WParallaxScrollView2:{screen:WParallaxScrollView2},
    WHeaderScrollView:{screen:WHeaderScrollView},
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