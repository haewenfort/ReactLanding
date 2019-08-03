import React, { useContext} from 'react';
import Button from './Button';
import {AppContext} from './App';

/** 
 * Use useContext if outside JSX
 * Use AppContext.Consumer if inside JSX
*/

const SignUpButton = () => {
    const [state,setState] = useContext(AppContext);
    const openWindow = () => {
        setState({ signUpForm: true, progress: 'Signing in' })
    }

    return (
        <AppContext.Consumer>
            {
                (value)=><Button clickFunction={openWindow} className="link">{value[0].progress}</Button>
            }
        </AppContext.Consumer>
    );
}

export default SignUpButton;