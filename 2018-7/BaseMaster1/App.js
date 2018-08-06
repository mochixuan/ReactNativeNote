import React from 'react';
import {StackNavigator} from 'react-navigation'
import StackViewStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator'
import MainPage from './app/containers/MainPage'
import WidgetPage from "./app/containers/WidgetPage";
import LifeCyclePage from "./app/containers/LifeCyclePage";
import AnimatablePage from "./app/containers/AnimatablePage";
import SortPage from "./app/containers/SortPage";

const App  = StackNavigator({
    MainPage: {screen: MainPage},
    WidgetPage: {screen: WidgetPage},
    LifeCyclePage: {screen: LifeCyclePage},
    AnimatablePage: {screen: AnimatablePage},
    SortPage: {screen: SortPage},
},{
    navigationOptions: {
        gesturesEnabled: true
    },
    headerMode: 'none',
    transitionConfig: (()=>({
        screenInterpolator: StackViewStyleInterpolator.forHorizontal
    })),
})

export default App
