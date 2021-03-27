import React, { Component } from 'react';
import SearchResult from './search-results';

const SearchResults = (props) => {
    const cinemaRows = props.filteredCinemas.map(h =>
        <SearchResult key = {h.id.toString()} cinema={h}
        setActiveCinema={props.setActiveCinema} />);

    return (
        <div className="mt-2">
            <h4>Result for {props.cinema}:</h4>
            <table className="table table-hover">
                <tbody>
                    {cinemaRows}
                </tbody>
            </table>
        </div>
    );
}

export default SearchResults;