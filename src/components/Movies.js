import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

export const Movies = ({ movies }) => {
    return (
        <Fragment>
            <h1 className="display-4 text-center mt-5 mb-5">Top Rated Movies</h1>
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
