import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addNavigationHelpers} from 'react-navigation'
import Router from './Router'

/**
 * addNavigationHelpers
 * 接收一个拥有state和dispatch的纯navigator的prop,
 * 传递的参数是在screen navigation prop中的各种函数,
 * 例如navigation.navigate()和navigation.goBack().
 * 这些函数是简单的助手函数帮助创建action并且发送到dispatch
 *
 * dispatch应该是Provider提供的
 *
 *
 * 相当于重写了那些方法再吧方法替换过去
 */

class AppWithNavigationState extends Component {

    render() {
        const {dispatch,navReducer} = this.props;
        return(
            <Router
                navigation = {
                    addNavigationHelpers({
                        dispatch: dispatch,
                        state: navReducer
                    })
                }
            />
        )
    }

}

//本来react-natigation中会自带navigation熟悉的，但'可能'由于redux接管了props使得原有的navigation被清了，所以要单独添加进去
const mapStateToProps = (state) => {
    return {
        navReducer: state.navReducer
    }
}

export default connect(mapStateToProps)(AppWithNavigationState)