import { FETCH_MOVIES, FETCH_MOVIE, FETCH_MOVIES_SIMMILAR, SHOW_LOADER } from "../types";

const handlers = {
    [SHOW_LOADER]: state => ({ ...state, loading: true }),
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
    [FETCH_MOVIES_SIMMILAR]: (state, { payload }) => ({
        ...state,
        moviesSimilar: payload,
        loading: false
    }),
    DEFAULT: state => state
};

export const moviedbReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action);
};
