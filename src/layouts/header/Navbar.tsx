import { Link, NavLink } from 'react-router-dom';
import logo from  '/assets/img/svg/logo.svg';
import { NavbarHamburger } from './Hamburger';

const Navbar = ():JSX.Element => {
    return (
        <nav className="navbar">
            <Link className="navbar-brand" to="/">
                <img src={ logo } alt="logo marvel" />
            </Link>
            <div className="navbar-content">
                <div className="navbar-collapse-nav">
                    <NavLink to="/marvel">
                        Marvel
                    </NavLink>
                    <NavLink to="/dc">
                        Detective Comics
                    </NavLink>
                </div>
                <div className="navbar-collapse-logout">
                    <NavLink className="btn btn--small" to="/login">
                        Logout
                    </NavLink>
                </div>
            </div>
            <NavbarHamburger />
        </nav>
    )
}

export { Navbar }