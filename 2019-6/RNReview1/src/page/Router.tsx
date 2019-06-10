import { createAppContainer, createStackNavigator } from 'react-navigation'
import { DetailPage } from './main/DetailPage'
import { MainRouter } from './router/MainRouter'

const RouterStack = createStackNavigator(
  {
    MainRouter: { screen: MainRouter },
    DetailPage: { screen: DetailPage }
  }, {
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: true
    }
  }
) 

const Router = createAppContainer(RouterStack)

export { Router }
