import { Link, NavLink } from 'react-router-dom';
import logo from  '/assets/img/svg/logo.svg';
import { NavbarHamburger } from './Hamburger';
//Store
import { useNavbar } from "../../store";

interface Props {
    enableNav?: boolean
}

const Navbar = ({ enableNav }: Props):JSX.Element => {
    //Store
    const setHamburger = useNavbar(state => state.setHamburger);
    const hamburger = useNavbar(state => state.hamburger);

    return (
        <nav className={`navbar ${hamburger ? 'active' : ''}`}>
            <Link className="navbar-brand" to="/">
                <img src={ logo } alt="logo marvel" />
            </Link>
            { enableNav && <div className="navbar-content">
                <div className="navbar-collapse-nav">
                    <NavLink to="/marvel" onClick={ ()=> setHamburger(false) }>
                        Marvel
                    </NavLink>
                    <NavLink to="/dc" onClick={ ()=> setHamburger(false) }>
                        Detective Comics
                    </NavLink>
                </div>
                <div className="navbar-collapse-logout">
                    <NavLink className="btn btn--small" to="/" onClick={ ()=> setHamburger(false) }>
                        Logout
                    </NavLink>
                </div>
            </div> }
            { enableNav && <NavbarHamburger /> }
        </nav>
    )
}

export { Navbar }