import { Link, NavLink } from "react-router-dom/cjs/react-router-dom.min";

import './Header.css'

const Header = () => {

    // let activeLimkStyles = {
    //     color: 'red',
    //     fontWeight: 'bold',
    //     textDecoration: 'underline',
    // }

    // activeStyle{} direct into element
    return (
        <header>
            <h1><NavLink className="home" to="/">GamesPlay</NavLink></h1>
            <nav>
                <NavLink activeClassName="active-navigation-link" to="/games">All games</NavLink>
                <div id="user">
                    <NavLink activeClassName="active-navigation-link" to="/create-game">Create Game</NavLink>
                    <NavLink activeClassName="active-navigation-link" to="/logout">Logout</NavLink>
                </div>
                <div id="guest">
                    <NavLink activeClassName="active-navigation-link" to="/login">Login</NavLink>
                    <NavLink activeClassName="active-navigation-link" to="/register">Register</NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Header;