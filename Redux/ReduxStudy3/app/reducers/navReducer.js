import Router from '../Router'
import {addNavigationHelpers} from 'react-navigation'

/**
 * navigation prop传递给navigator的仅仅包含state和dispatch,
 * 这是当前的navigator的state,但是还有一个事件频道用来发送action request.
 * 所有的navigators都是受控组件:他们总是显示根据props.navigation.state来显示,
 * 他们要改变state,唯一的办法是发送actions到props.navigation.dispatch.
 * Navigators可以通过定制他们的router来改变父navigators的行为.
 * 例如,当action应该从router.getStateForAction返回null来阻止其运行的时候.
 * 或者一个navigator可以为了定制URI的操作而改写router.getActionForPathParams,
 * 为了输出相对navigation action以及操作router.getStateForAction的action.
 *
 *
 */

const recentlyVisitedRoutes = new Set();//防止連點，多次navigate，增加此判斷
export default navReducer = (state,action) => {
    if (action.type === 'Navigation/NAVIGATE') {
        if (recentlyVisitedRoutes.has(action.routeName)) {
            return state;
        }
        recentlyVisitedRoutes.add(action.routeName);
        setTimeout(() => {
            recentlyVisitedRoutes.delete(action.routeName);
        }, 400);
    }
    let nextState = Router.router.getStateForAction(action,state)
    return nextState || state;
}