import React from 'react';

const SearchResult = (props) => {
    const setActive = (e) => {
        e.preventDefault();
        props.setActiveCinema(props.cinema);
    };

    return <tr onClick = {setActive}>
        <td> sada</td>
        <td> {props.cinema} sada</td>
        <td> {props.cinema} sada</td>
    </tr>
};

export default SearchResult;