import React, { Fragment, useContext, useEffect } from "react";
import { MoviedbContext } from "../context/movidedb/moviedbContext";
import { Movie } from "../components/Movie";
import { Loader } from "../components/Loader";
import { SimilarMovies } from "../components/SimilarMovies";
import { RecomendedMovies } from "../components/RecomendedMovies";

export const MovieDetail = props => {
    
    const {
        loading,
        movie,
        trailer,
        moviesSimilar,
        moviesRecomended,
        fetchMovie,
        fetchTrailer,
        fetchSimilarMovies,
        fetchRecomendedMovies
    } = useContext(MoviedbContext);
    
    const location = window.location.href;

    useEffect(() => {
        fetchMovie(parseInt(props.match.params.number, 10));
        fetchTrailer(parseInt(props.match.params.number, 10), 'uk');
        fetchSimilarMovies(parseInt(props.match.params.number, 10));
        fetchRecomendedMovies(parseInt(props.match.params.number, 10));
        // eslint-disable-next-line
    }, [location]);

    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    <Movie data={movie} trailer={trailer} />
                    <SimilarMovies movies={moviesSimilar} />
                    <RecomendedMovies movies={moviesRecomended} />
                </Fragment>
            )}
        </Fragment>
    );
};
