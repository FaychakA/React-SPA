import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {


    return (
        <header className="header">
            <div className="header__logo">
                <img
                    src="./img/icons/header/logo.jpg"
                    alt="logo"
                    className="header__img"
                />
            </div>

            <ul className="header__link-list link__list">
                <li className="link__item">
                    <NavLink
                        to="/"
                        exact
                        className="link__routing-link"
                        activeClassName="link__disabled"
                    >
                        Home
                    </NavLink>
                </li>

                <li className="link__item">
                    <NavLink
                        to="/search"
                        exact
                        className="link__routing-link"
                        activeClassName="link__disabled"
                    >
                        Search
                    </NavLink>
                </li>
            </ul>
        </header>
    );
};

export default Header;
