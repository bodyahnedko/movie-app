import React, { Fragment } from "react";

export const Movie = ({ data }) => {
    return (
        <Fragment>
            <h1 className="display-4 mt-5">{data.title}</h1>
            <div className="row mt-3 mb-5">
                <div className="col-md-5">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                        alt={data.title}
                    />
                </div>
                <div className="col-md-7">
                    <ul className="list-group">
                        <li className="d-flex justify-content-between list-group-item">
                            Budget: <strong>{data.budget}</strong>
                        </li>
                        <li className="d-flex justify-content-between list-group-item">
                            Runtime: <strong>{data.runtime}</strong>
                        </li>
                        <li className="d-flex justify-content-between list-group-item">
                            Vote Avergae: <strong>{data.vote_average}</strong>
                        </li>
                        <li className="d-flex justify-content-between list-group-item">
                            Status: <strong>{data.status}</strong>
                        </li>
                        <li className="d-flex justify-content-between list-group-item">
                            Release Date: <strong>{data.release_date}</strong>
                        </li>
                        <li className="d-flex justify-content-between list-group-item">
                            Vote Average: <strong>{data.vote_average}</strong>
                        </li>
                        <li className="d-flex justify-content-between list-group-item">
                            Vote Count: <strong>{data.vote_count}</strong>
                        </li>
                    </ul>
                    <p className="jumbotron mt-3">{data.overview}</p>
                </div>
            </div>
        </Fragment>
    );
};
