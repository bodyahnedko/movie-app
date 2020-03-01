import React from "react";
import { NavLink } from "react-router-dom";

export const Pagination = ({ props, pages }) => {
    const currentPage = props.match.params.number;
    
    const goToHandler = () => {
        const gotoInput = document.getElementById('gotoInput');
        const gotoNumb = gotoInput.value ? gotoInput.value : 1;
        window.location.href = `${window.location.origin}/${gotoNumb}`;
    }

    const keyPressHandler = (event) => {
        if(event.key === 'Enter'){
            goToHandler();
        }
    }
    
    return (
        <div className="d-flex flex-wrap justify-content-center mt-5">
            <div className="d-flex align-items-center">
                <NavLink
                    className={+currentPage <= 1 ? "disabled" : "active"}
                    to={`/${+currentPage - 1}`}
                >
                    Previous
                </NavLink>
                <strong className="ml-5 mr-5">
                    ({currentPage} page of {pages})
                </strong>
                <NavLink
                    className={+currentPage >= pages ? "disabled" : "active"}
                    to={`/${+currentPage + 1}`}
                >
                    Next
                </NavLink>
            </div>
            <div className="goto w-100 d-flex flex-wrap align-items-center mt-4 justify-content-center">
                <span className="mb-1 w-100 text-center">Перейти до сторінки:</span>
                <div className="form-row">
                    <div className="col">
                        <input type="number" min="1" max={pages} onKeyPress={keyPressHandler} id="gotoInput" className="form-control goto__input" placeholder="Номер"/>
                    </div>
                    <div className="col">
                        <button className="btn btn-primary" onClick={goToHandler}>Перейти</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
