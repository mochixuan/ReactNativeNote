import React from 'react'
import FilterLink from '../container/FilterLink'

const renderFilters = ()=> {
    return (
        <p>
            <FilterLink filter="SHOW_ALL">
                全部任务{'    '}
            </FilterLink>
            <FilterLink filter="SHOW_ACTIVE">
                代办任务{'    '}
            </FilterLink>
            <FilterLink filter="SHOW_COMPLETED">
                已完成任务{'    '}
            </FilterLink>
        </p>
    )
}

const renderUndo = ()=>{
    return (
        <p>
            <button onClick={this.props.onUndo} disabled={this.props.undoDisabled}>Undo</button>
            <button onClick={this.props.onRedo} disabled={this.props.redoDisabled}>Redo</button>
        </p>
    )
}

const Footer = () => (
    <div>
        {renderFilters()}
        {renderUndo()}
    </div>
)

export default Footer