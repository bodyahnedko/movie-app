import React, { Fragment, useContext, useEffect } from "react";
import { MoviedbContext } from "../context/movidedb/moviedbContext";
import { Movies } from "../components/Movies";
import { Loader } from "../components/Loader";
import { Pagination } from "../components/Pagination";

export const Home = props => {
    const { loading, movies, fetchMovies, pages } = useContext(MoviedbContext);

    const location = window.location.href;

    useEffect(() => {
        fetchMovies(parseInt(props.match.params.number, 10));
        // eslint-disable-next-line
    }, [location]);

    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    <Movies movies={movies} />
                    <Pagination props={props} pages={pages} />
                </Fragment>
            )}
        </Fragment>
    );
};
