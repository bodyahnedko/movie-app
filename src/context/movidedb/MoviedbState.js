import React, { useReducer } from "react";
import axios from "axios";
import { MoviedbContext } from "./moviedbContext";
import { moviedbReducer } from "./moviedbReducer";
import {
    FETCH_MOVIES,
    FETCH_MOVIE,
    FETCH_TRAILER,
    SHOW_LOADER,
    FETCH_MOVIES_SIMMILAR,
    FETCH_MOVIES_RECOMENDED,
    SEARCH_MOVIES
} from "../types";

const api = {
    api_key: "c1c695eca4a651cebb59c1ee5a4934d3",
    baseUrl: "https://api.themoviedb.org",
    language: "uk",
    page: 1
};

export const MoviedbState = ({ children }) => {
    const initialState = {
        movies: [],
        movie: [],
        trailer: [],
        moviesSimilar: [],
        moviesRecomended: [],
        searchResult: [],
        loading: false,
        pages: 0
    };
    const [state, dispatch] = useReducer(moviedbReducer, initialState);

    const showLoader = () =>
        dispatch({
            type: SHOW_LOADER
        });

    // axios.interceptors.request.use(request => {
    //     console.log("Starting Request", request);
    //     return request;
    // });

    // axios.interceptors.response.use(response => {
    //     console.log("Response:", response);
    //     return response;
    // });

    const fetchTrailer = async (videoID, lang) => {
        const trailerUrl = `${api.baseUrl}/3/movie/${videoID}/videos?api_key=${api.api_key}&language=uk`;
       
        try {
            const res = await axios.get(trailerUrl);
            
            if(res.data.results.length) {
                // const payload = res.data.results.map(item => item.key );
                const payload = res.data.results[0].key;
                dispatch({
                    type: FETCH_TRAILER,
                    payload
                });
            } else {
                const trailerUrl = `${api.baseUrl}/3/movie/${videoID}/videos?api_key=${api.api_key}`;
                const res = await axios.get(trailerUrl);
                // const payload = res.data.results.map(item => item.key );
                const payload = res.data.results[0].key;
                dispatch({
                    type: FETCH_TRAILER,
                    payload
                });
            }

        } catch(error) {
            console.error(error);
        }
    }

    const fetchMovies = async page => {
        showLoader();

        const pageNum = page ? page : api.page;

        const url = `${api.baseUrl}/3/movie/popular?api_key=${api.api_key}&language=${api.language}&page=${pageNum}`;

        try {
            const res = await axios.get(url);
            const payload = Object.keys(res.data.results).map(key => {
                return {
                    ...res.data.results[key],
                    id: res.data.results[key].id,
                };
            });

            payload.pages = res.data.total_pages;

            dispatch({
                type: FETCH_MOVIES,
                payload
            });
        } catch (error) {
            console.error(error);
        }
    };

    const searchMovies = async query => {
        showLoader();

        const url = `${api.baseUrl}/3/search/movie?api_key=${api.api_key}&language=${api.language}&query=${query}`;

        try {
            const res = await axios.get(url);
            console.log(res);
            const payload = Object.keys(res.data.results).map(key => {
                return {
                    ...res.data.results[key]
                };
            });

            payload.pages = res.data.total_pages;

            dispatch({
                type: SEARCH_MOVIES,
                payload
            });
        } catch (error) {
            console.error(error);
        }
    };

    const fetchMovie = async id => {
        showLoader();

        const url = `${api.baseUrl}/3/movie/${id}?api_key=${api.api_key}&language=${api.language}`;

        try {
            const res = await axios.get(url);
            console.log(res);
            const payload = {
                ...res.data,
                id: res.data.id
            };

            dispatch({
                type: FETCH_MOVIE,
                payload
            });
           
        } catch (error) {
            console.error(error);
        }
    };

    const fetchSimilarMovies = async id => {
        showLoader();

        const url = `${api.baseUrl}/3/movie/${id}/similar?api_key=${api.api_key}&language=${api.language}&page=${api.page}`;

        try {
            const res = await axios.get(url);
            const payload = Object.keys(res.data.results).map(key => {
                return {
                    ...res.data.results[key],
                    id: res.data.results[key].id
                };
            });

            dispatch({
                type: FETCH_MOVIES_SIMMILAR,
                payload
            });
        } catch (error) {
            console.error(error);
        }
    };

    const fetchRecomendedMovies = async id => {
        showLoader();

        const url = `${api.baseUrl}/3/movie/${id}/recommendations?api_key=${api.api_key}&language=${api.language}&page=${api.page}`;

        try {
            const res = await axios.get(url);
            const payload = Object.keys(res.data.results).map(key => {
                return {
                    ...res.data.results[key],
                    id: res.data.results[key].id
                };
            });

            dispatch({
                type: FETCH_MOVIES_RECOMENDED,
                payload
            });
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <MoviedbContext.Provider
            value={{
                showLoader,
                fetchMovies,
                fetchMovie,
                fetchTrailer,
                fetchSimilarMovies,
                fetchRecomendedMovies,
                searchMovies,
                loading: state.loading,
                searchResult: state.searchResult,
                movies: state.movies,
                movie: state.movie,
                moviesSimilar: state.moviesSimilar,
                moviesRecomended: state.moviesRecomended,
                pages: state.pages,
                trailer: state.trailer
            }}
        >
            {children}
        </MoviedbContext.Provider>
    );
};
