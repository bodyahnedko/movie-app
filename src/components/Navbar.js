import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container">
            <div className="navbar-brand">Movie App</div>

            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/" exact>
                        Головна
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/search">
                        Пошук
                    </NavLink>
                </li>
                {/* <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                        Інфо
                    </NavLink>
                </li> */}
            </ul>
        </div>
    </nav>
);
