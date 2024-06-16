import { HTMLAttributes } from 'react';

type PropsNative =  HTMLAttributes<HTMLElement>;

type PropsReact = {
    children: React.ReactNode;
    headingType?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

type Props = PropsNative & PropsReact;

const Text = ({ children, headingType, ...atributtes }: Props):JSX.Element =>{
    return( 
        <>
            {!headingType && <p {...atributtes}>{ children }</p>}
            {headingType == 'h1' && <h1 {...atributtes}>{ children }</h1>}
            {headingType == 'h2' && <h2 {...atributtes}>{ children }</h2>}
            {headingType == 'h3' && <h3 {...atributtes}>{ children }</h3>}
            {headingType == 'h4' && <h4 {...atributtes}>{ children }</h4>}
            {headingType == 'h5' && <h5 {...atributtes}>{ children }</h5>}
            {headingType == 'h6' && <h6 {...atributtes}>{ children }</h6>}
        </>
    );
}

export { Text }