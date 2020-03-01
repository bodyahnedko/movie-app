import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

export const Movies = ({ movies, title }) => {
    const pageTitle = title ? title : 'Заголовок сторінки';
    return (
        <Fragment>
            <h1 className="display-4 text-center mt-5 mb-4">{pageTitle}</h1>
            <div className="row">
                {movies.map(movie => (
                    <div key={movie.id} className="col-6 col-sm-4 col-lg-2">
                        <NavLink
                            to={`/movie/${movie.id}`}
                            className="movie-item text-center position-relative"
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
