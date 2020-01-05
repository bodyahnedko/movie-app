import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

export const SimilarMovies = ({ movies }) => {
    return (
        <Fragment>
            <h2 className="display-6 mt-5 mb-5 text-center">Simmilar Movies</h2>
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
                        </NavLink>
                    </div>
                ))}
            </div>
        </Fragment>
    );
};
