import React, { Fragment, useContext, useEffect } from "react";
import { MoviedbContext } from "../context/movidedb/moviedbContext";
import { Movies } from "../components/Movies";
import { Loader } from "../components/Loader";
import { Pagination } from "../components/Pagination";

export const Search = props => {
    const { loading, searchResult, searchMovies, pages } = useContext(MoviedbContext);

    const location = window.location.href;

    useEffect(() => {
        searchMovies('Batman');
        // eslint-disable-next-line
    }, [location]);
    console.log('ddddd', searchResult)
    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    <Movies movies={searchResult} title='Результати пошуку' />
                    {
                        pages > 1 ? (
                            <Pagination props={props} pages={pages} />
                        ) : (
                            null
                        )
                    }
                </Fragment>
            )}
        </Fragment>
    );
};
