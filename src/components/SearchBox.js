import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='search robots'
                // https://www.w3schools.com/jsref/event_onchange.asp
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;