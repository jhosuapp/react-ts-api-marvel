//React hooks
import { useRef, useState } from "react";

const HeaderHamburger = ():JSX.Element =>{
    //Store
    const [ hamburger, setHamburger ] = useState(false);
    //Ref
    const node = useRef<HTMLDivElement>(null);
    //Handle
    const handleClick = ():void=>{
        const header = node.current?.parentElement;
        setHamburger(!hamburger);
        hamburger ? header?.classList.remove('active') : header?.classList.add('active');
    }

    return (
        <div ref={ node }  onClick={ handleClick }  className={`hamburger ${hamburger && 'active'}`}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export { HeaderHamburger }