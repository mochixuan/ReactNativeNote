import React from 'react'
import FilterLink from '../container/FilterLink'

const Footer = () => (
    <div>
        <FilterLink filter="SHOW_ALL">
            全部任务{'    '}
        </FilterLink>
        <FilterLink filter="SHOW_ACTIVE">
            代办任务{'    '}
        </FilterLink>
        <FilterLink filter="SHOW_COMPLETED">
            已完成任务{'    '}
        </FilterLink>
    </div>
)

export default Footer