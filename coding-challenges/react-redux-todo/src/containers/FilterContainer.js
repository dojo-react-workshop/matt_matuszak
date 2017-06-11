import React from 'react'

import FilterItem from '../components/redux/FilterItem'

const FilterContainer = (props) => {

    console.log('FilterContainer() -->', props)
    return (
        <ul className="button-group tiny secondary">
            <FilterItem {...props} option="All" />
            <FilterItem {...props} option="Active" />
            <FilterItem {...props} option="Completed" />
        </ul>
    );
}

export default FilterContainer
