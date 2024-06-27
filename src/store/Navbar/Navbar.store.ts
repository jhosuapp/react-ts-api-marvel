import {create} from 'zustand';

interface NavbarProps {
    hamburger: boolean,
    setHamburger: (state: boolean) => void;
}

const useNavbar = create<NavbarProps>()((set) => ({
    //Default values
    hamburger: false,
    setHamburger: (state: boolean)=>{ set({ hamburger: state }); }
}));

export { useNavbar }