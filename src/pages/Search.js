import React, { Fragment, useContext, useEffect } from "react";
import { MoviedbContext } from "../context/movidedb/moviedbContext";
import { SearchForm } from "../components/SearchForm";
import { SearchResults } from "../components/SearchResults";

export const Search = props => {
    
    const {
        searchMovies,
        searchResult,
        activeSearch,
        // deactivateSearch
    } = useContext(MoviedbContext);

    useEffect(() => {
       // searchResult.splice(0, searchResult.length);
    //    deactivateSearch();
    },[]);

    const searchHandler = event => {
        event.preventDefault();
        const input = document.getElementById('searchInput');
        searchMovies(input.value);
    }

    return (
        <Fragment>
            <SearchForm submitHandler={searchHandler}/>
            {activeSearch ? (
                <SearchResults searchResult={searchResult}/>
            )
            : (
                <h4 className="text-center mt-4 mb-4">Почніть пошук...</h4>
            )}
        </Fragment>
    );
};
