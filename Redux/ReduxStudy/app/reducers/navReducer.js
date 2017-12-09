import Router from '../../Router'
import {addNavigationHelpers} from 'react-navigation'

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