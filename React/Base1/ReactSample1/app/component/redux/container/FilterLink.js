import {connect} from 'react-redux'
import Link from '../component/Link'
import {setVisibility} from "../action"

const mapStateToProps = (state,ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchProps = (dispatch,ownProps) => {
    return {
        onClick: ()=>{
            dispatch(setVisibility(ownProps.filter))
        }
    }
}

const FilterLink = connect(
    mapStateToProps,
    mapDispatchProps,
)(Link)

export default FilterLink