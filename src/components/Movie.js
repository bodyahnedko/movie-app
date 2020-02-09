import React, { Fragment } from "react";

export const Movie = ({ data, trailer }) => {
    const movieData = {
        "Середня оцінка": data.vote_average,
        "Кількість голосів": data.vote_count,
        "Тривалість": data.runtime,
        "Статус": data.status,
        "Дата виходу": data.release_date,
        "Бюджет": data.budget,
    };

    const genres =  data.genres ? data.genres : [];

    const youTubeURL = 'https://www.youtube.com/embed/';

    const description = data.overview ? <p className="jumbotron mt-3">{data.overview}</p> : null;

    return (
        <Fragment>
            <h1 className="bg-secondary text-white pt-2 pb-2 display-5 mt-5 mb-4 text-center">{data.title}</h1>
            <div className="row mt-3 mb-4">
                <div className="col-md-4">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                        className="d-block mb-3"
                        alt={data.title}
                    />
                </div>
                <div className="col-md-8">
                    <div className="mb-3">
                        {genres.map((genre, index) => {
                            return (
                                <span key={index} className="badge mr-1 badge-warning">{genre.name}</span>
                            )
                        })}
                    </div>
                    <ul className="list-group">
                        {Object.keys(movieData).map((key, index) => {
                            if(!movieData[key]) {
                                return false;
                            }
                            return (
                                <li key={index} className="d-flex justify-content-between list-group-item">
                                    {key} <strong>{movieData[key]}</strong>
                                </li>
                            );
                        })}
                    </ul>
                    
                    {description}
                </div>
            </div>
            <div className="mt-3 mb-4 d-flex flex-wrap justify-content-center">
                <h2 className="bg-info text-white pt-2 pb-2 mt-4 mb-4 w-100 text-center">Трейлер</h2>
                <iframe width="727" height="409" src={youTubeURL + trailer} 
                    title="trailer" frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                ></iframe>
            </div>
        </Fragment>
    );
};
