import { Link, NavLink } from 'react-router-dom';
import logo from  '/assets/img/svg/logo.svg';
import { NavbarHamburger } from './Hamburger';
import { Text } from '../../components/index';
//Store
import { useNavbar, useAuth } from "../../store";

interface Props {
    enableNav?: boolean
}

const Navbar = ({ enableNav }: Props):JSX.Element => {
    //Store
    const setHamburger = useNavbar(state => state.setHamburger);
    const hamburger = useNavbar(state => state.hamburger);
    const user = useAuth(state => state.user);

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
                    <NavLink to="/search" onClick={ ()=> setHamburger(false) }>
                        Search
                    </NavLink>
                </div>
                <div className="navbar-collapse-logout">
                    {user && <Text>{ user.user_name }</Text>}
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