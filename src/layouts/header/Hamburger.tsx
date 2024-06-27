//Store
import { useNavbar } from "../../store";

const NavbarHamburger = ():JSX.Element =>{
    //Store
    const hamburger = useNavbar(state => state.hamburger);
    const setHamburger = useNavbar(state => state.setHamburger);
    //Handle
    const handleClick = ():void=>{
        setHamburger(!hamburger);
    }

    return (
        <div onClick={ handleClick }  className={`hamburger ${hamburger && 'active'}`}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export { NavbarHamburger }