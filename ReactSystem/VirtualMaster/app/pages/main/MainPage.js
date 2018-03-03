import {TabNavigator} from 'react-navigation'
import QuotesPage from "./QuotesPage";
import InformationPage from "./InformationPage";
import CommunityPage from "./CommunityPage";
import UserPage from "./UserPage";
import {main_color} from '../../base/BaseStyle'

const MainPage = TabNavigator({
    QuotesPage: {screen: QuotesPage},
    InformationPage: {screen: InformationPage},
    CommunityPage: {screen: CommunityPage},
    UserPage: {screen: UserPage}
},{
    animationEnabled: true,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    backBehavior: 'none',
    tabBarOptions: {
        activeTintColor: main_color,
        inactiveTintColor: '#949494',
        showIcon: true,
        indicatorStyle: {
            height: 0,
        },
        style: {
            backgroundColor: '#f0f0f0',
            height: 54, // 1. 改变高度
        },
        labelStyle: {
            margin: 0,  // 2. 设置高度后，设置高度
            fontSize: 10,
        }
    }
})


export default MainPage
