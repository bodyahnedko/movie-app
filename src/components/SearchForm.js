import React from 'react';


export const SearchForm = props => {
    return (
        <div className="navbar navbar-light bg-light pt-4 pb-4 d-flex justify-content-center">
            <form className="form-inline" onSubmit={props.submitHandler}>
                <input className="form-control mr-sm-2" id="searchInput" type="search" placeholder="Пошук" aria-label="Search" required></input>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Пошук</button>
            </form>
        </div>
    );
}