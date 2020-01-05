import React, { useReducer } from "react";
import axios from "axios";
import { MoviedbContext } from "./moviedbContext";
import { moviedbReducer } from "./moviedbReducer";
import { FETCH_MOVIES, FETCH_MOVIE, SHOW_LOADER, FETCH_MOVIES_SIMMILAR } from "../types";

const api = {
    api_key: "c1c695eca4a651cebb59c1ee5a4934d3",
    baseUrl: "https://api.themoviedb.org",
    language: "en-US",
    page: 1
};

export const MoviedbState = ({ children }) => {
    const initialState = {
        movies: [],
        movie: [],
        moviesSimilar: [],
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

    const fetchMovies = async (page) => {
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

    const fetchMovie = async (id) => {
        showLoader();

        const url = `${api.baseUrl}/3/movie/${id}?api_key=${api.api_key}&language=${api.language}`;

        try {
            const res = await axios.get(url);
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

    const fetchSimilarMovies = async (id) => {
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
    return (
        <MoviedbContext.Provider
            value={{
                showLoader,
                fetchMovies,
                fetchMovie,
                fetchSimilarMovies,
                loading: state.loading,
                movies: state.movies,
                movie: state.movie,
                moviesSimilar: state.moviesSimilar,
                pages: state.pages
            }}
        >
            {children}
        </MoviedbContext.Provider>
    );
};
