import React, { Fragment, useContext, useEffect } from "react";
import { MoviedbContext } from "../context/movidedb/moviedbContext";
import { Movies } from "./Movies";
import { Loader } from "./Loader";

export const SearchResults = props => {
    const { loading } = useContext(MoviedbContext);
    
    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    {props.searchResult && props.searchResult.length ? (
                        <Movies movies={props.searchResult} title='Результати пошуку' />
                    ):(
                        <h4 className="mt-4 mb-4 text-center text-danger">За вашим запитом нічого не знайдено</h4>
                    )}
                </Fragment>
            )}
        </Fragment>
    );
};
