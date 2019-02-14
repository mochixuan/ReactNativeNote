import React from 'react';
import {createStackNavigator} from 'react-navigation'
import CardStackStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator'
import MainPage from './app/containers/MainPage'
import WidgetPage from "./app/containers/WidgetPage";
import LifeCyclePage from "./app/containers/LifeCyclePage";
import AnimatablePage from "./app/containers/AnimatablePage";
import SortPage from "./app/containers/SortPage";
import PopupPage from "./app/containers/PopupPage";
import LayoutAnimatePage from "./app/containers/LayoutAnimatePage";
import WebViewPage from "./app/containers/WebViewPage";
import QRCodePage from "./app/containers/QRCodePage";
import TouchIdPage from "./app/containers/TouchIdPage";
import CodePushPage from "./app/containers/CodePushPage";

const App  = createStackNavigator({
    MainPage: {screen: MainPage},
    WidgetPage: {screen: WidgetPage},
    LifeCyclePage: {screen: LifeCyclePage},
    AnimatablePage: {screen: AnimatablePage},
    SortPage: {screen: SortPage},
    PopupPage: {screen: PopupPage},
    LayoutAnimatePage: {screen: LayoutAnimatePage},
    WebViewPage: {screen: WebViewPage},
    QRCodePage: {screen: QRCodePage},
    TouchIdPage: {screen: TouchIdPage},
    CodePushPage: {screen: CodePushPage}
},{
    navigationOptions: {
        gesturesEnabled: true
    },
    transitionConfig: () => ({
        screenInterpolator: CardStackStyleInterpolator.forHorizontal
    }),
    headerMode: 'none',
})

export default App
