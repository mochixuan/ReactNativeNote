import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addNavigationHelpers} from 'react-navigation'
import Router from './Router'

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

const mapStateToProps = (state) => {
    return {
        navReducer: state.navReducer
    }
}

export default connect(mapStateToProps)(AppWithNavigationState)