import React from 'react';
import LoginWindow from './LoginWindow';
import SignUpWindow from './SignUpWindow';

const RegisterLogin = () => {
    return (
        <div className="RegisterLogin">
            <div className="container">
                <SignUpWindow />
                <hr/>
                <LoginWindow />
            </div>
        </div>    
    )
}

export default RegisterLogin;