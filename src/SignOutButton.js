import React, { useContext} from 'react';
import Button from './Button';
import {AppContext} from './App';

/** 
 * Use useContext if outside JSX
 * Use AppContext.Consumer if inside JSX
*/

const SignOutButton = (prop) => {
    const [state,setState] = useContext(AppContext);
    const deleteLocalStorage = () => {
        localStorage.removeItem('userToken');
    }

    return (
        <Button clickFunction={deleteLocalStorage} className="link">{prop.children}</Button>
    );
}

export default SignOutButton;