import React from 'react'

import FilterItem from '../components/redux/FilterItem'

const FilterContainer = (props) => {

    console.log('FilterContainer() -->', props)
    return (
        <div className='gridContainer'>
            <div className="row">
                <div className="small-4 columns small-centered">
                    <ul className="button-group tiny secondary">
                        <FilterItem {...props} option="All" />
                        <FilterItem {...props} option="Active" />
                        <FilterItem {...props} option="Completed" />
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default FilterContainer
