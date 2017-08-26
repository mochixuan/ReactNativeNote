import {Component} from 'react'
import {
    StackNavigator
} from 'react-navigation'
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator'

import Main from './components/Main'

const App = StackNavigator({
    Main:{screen:Main}
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