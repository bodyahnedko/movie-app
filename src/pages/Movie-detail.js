import React, { Fragment, useContext, useEffect } from "react";
import { MoviedbContext } from "../context/movidedb/moviedbContext";
import { Movie } from "../components/Movie";
import { Loader } from "../components/Loader";
import { SimilarMovies } from "../components/SimilarMovies";

export const MovieDetail = props => {
    
    const {
        loading,
        movie,
        moviesSimilar,
        fetchMovie,
        fetchSimilarMovies
    } = useContext(MoviedbContext);
    
    const location = window.location.href;

    useEffect(() => {
        fetchMovie(parseInt(props.match.params.number, 10));
        fetchSimilarMovies(parseInt(props.match.params.number, 10));
        // eslint-disable-next-line
    }, [location]);

    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    <Movie data={movie} />
                    <SimilarMovies movies={moviesSimilar} />
                </Fragment>
            )}
        </Fragment>
    );
};
