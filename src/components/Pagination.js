import React from "react";
import { NavLink } from "react-router-dom";

export const Pagination = ({ props, pages }) => {
    const currentPage = props.match.params.number;
    
    return (
        <div className="d-flex justify-content-center mt-5">
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
        </div>
    );
};
