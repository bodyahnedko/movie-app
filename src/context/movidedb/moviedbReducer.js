import { FETCH_MOVIES, FETCH_MOVIE, FETCH_TRAILER, 
         FETCH_MOVIES_SIMMILAR, SHOW_LOADER, FETCH_MOVIES_RECOMENDED, 
         SEARCH_MOVIES, ACTIVE_SEARCH, DEACTIVE_SEARCH
        } from "../types";

const handlers = {
    [SHOW_LOADER]: state => ({ ...state, loading: true }),
    [ACTIVE_SEARCH]: state => ({ ...state, activeSearch: true }),
    [DEACTIVE_SEARCH]: state => ({ ...state, activeSearch: false }),
    [FETCH_MOVIES]: (state, { payload }) => ({
        ...state,
        movies: payload,
        pages: payload.pages,
        loading: false
    }),
    [FETCH_MOVIE]: (state, { payload }) => ({
        ...state,
        movie: payload,
        loading: false
    }),
    [FETCH_TRAILER]: (state, { payload }) => ({
        ...state,
        trailer: payload
    }),
    [FETCH_MOVIES_SIMMILAR]: (state, { payload }) => ({
        ...state,
        moviesSimilar: payload,
        loading: false
    }),
    [FETCH_MOVIES_RECOMENDED]: (state, { payload }) => ({
        ...state,
        moviesRecomended: payload,
        loading: false
    }),
    [SEARCH_MOVIES]: (state, { payload }) => ({
        ...state,
        searchResult: payload,
        pages: payload.pages,
        loading: false
    }),
    DEFAULT: state => state
};

export const moviedbReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action);
};
