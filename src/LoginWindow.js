import React, { useContext, useState} from 'react';
import {AppContext} from './App';

const LoginWindow = () => {
    
    let email;
    let password;

    const [localState,setLocalState] = useState({
        successMessage: false,
        errorMessage: false
    });
    
    const [state,setState] = useContext(AppContext);

    const closeWindow = () => {
        setState({signUpForm: false, progress: 'Signup'});
    }

    const loginUser = () => {
        let formData = {
            email:  email.value,
            password: password.value
        }

        //Use fetch to retrieve JWT
        fetch (
            //'http://localhost:5000/auth/login',
            `${process.env.REACT_APP_API_URL}auth/login`,
            //Data
            {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        .then(async res => {
            console.log(res.status);
            if(res.status == "400"){
                //Handle the error
                setLocalState({
                    ...localState, 
                    successMessage: false,
                    errorMessage: true
                });
            }
            else {
                //Parse json data
                let userInfo = await res.json();

                localStorage.setItem('userToken', userInfo.token);

                setLocalState({
                    ...localState, 
                    successMessage: true,
                    errorMessage: false
                });

                setState({...state,signUpForm: false});
            }
        });
    }

    return(<div className="LoginWindow">
            <label>Email</label>
            <input 
                ref={comp => email = comp} 
                type="text" 
                className="form-control" />

            <label>Password</label>
            <input 
                ref={comp => password = comp} 
                type="text" 
                className="form-control" />
            
            <button onClick={loginUser} className="btn btn-primary">Login</button>
            <button onClick={closeWindow} className="btn btn-danger">Cancel</button>
            
			{localState.successMessage && <div className="alert alert-success">Congrats you have successfully login.</div>} 
			{localState.errorMessage && <div className="alert alert-danger">Something went wrong.</div>} 
    </div>)
}

export default LoginWindow;