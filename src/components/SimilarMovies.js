import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

export const SimilarMovies = ({ movies }) => {
    return (
        <Fragment>
            <h2 className="bg-success pt-2 pb-2 text-white mt-5 mb-3 text-center">Схожі фільми</h2>
            <div className="row">
                {movies.map(movie => (
                    <div key={movie.id} className="col-6 col-sm-4 col-lg-2">
                        <NavLink
                            to={`/movie/${movie.id}`}
                            className="movie-item text-center"
                        >
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <h2 className="movie-item__title">{movie.title}</h2>
                            <span className="rating position-absolute badge mr-1 badge-warning">{movie.vote_average}</span>
                        </NavLink>
                    </div>
                ))}
            </div>
        </Fragment>
    );
};
