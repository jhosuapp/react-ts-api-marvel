//React hooks
import { useNavigate } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
//Store && hooks
import { useNavbar, useAuth } from "../../store";
import { useAuthHook } from '../../hooks'
//Img && components
import logo from  '/assets/img/svg/logo.svg';
import { NavbarHamburger } from './Hamburger';
import { Text } from '../../components/index';

interface Props {
    enableNav?: boolean
}

const Navbar = ({ enableNav }: Props):JSX.Element => {
    //Store && hooks
    const setHamburger = useNavbar(state => state.setHamburger);
    const hamburger = useNavbar(state => state.hamburger);
    const user = useAuth(state => state.user);
    const { logoutUser } = useAuthHook();
    const navigate = useNavigate();
    //Handle logout
    const handleLogout = ()=>{
        logoutUser();
        navigate('/', { replace: true });
    }

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
                    <button className="btn btn--small" onClick={ ()=> { setHamburger(false), handleLogout() } }>
                        Logout
                    </button>
                </div>
            </div> }
            { enableNav && <NavbarHamburger /> }
        </nav>
    )
}

export { Navbar }