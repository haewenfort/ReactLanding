import React, { useContext, useState} from 'react';
import {AppContext} from './App';

const SignUpWindow = () => {
    
    let name;
    let email;
    let password;
    let gender;

    const [localState,setLocalState] = useState({
        successMessage: false,
        errorMessage: false
    });
    const [state,setState] = useContext(AppContext);

    const registerUser = () => {
        
        let formData = {
            name: name.value,
            email:  email.value,
            password: password.value,
            gender: gender.value
        }
        fetch (
            //URL
            //'http://localhost:5000/auth/register',
            `${process.env.REACT_APP_API_URL}auth/register`,
            //Data
            {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        .then(res => {
            console.log(res.status);
            if(!res.ok){
                //Handle the error
                setLocalState({
                    ...localState, 
                    successMessage: false,
                    errorMessage: true
                });
            }
            else {
                //Parse json data
                res.json();
                //Show success message
                setLocalState({
                    ...localState, 
                    successMessage: true,
                    errorMessage: false
                });
            }
        });
    }

    const closeSignUp = () => {
        setState({signUpForm: false, progress: 'Signup'});
    }

    return(<div className="SignUpWindow">
            <label>Username</label>
            <input 
                ref={comp => name = comp} 
                type="tcompext" 
                className="form-control" />

            <label>Password</label>
            <input 
                ref={comp => password = comp} 
                type="text" 
                className="form-control" />

            <label>Email</label>
            <input 
                ref={comp => email = comp} 
                type="text" 
                className="form-control" />

            <label>Gender</label>
            <input
                ref={comp => gender = comp}  
                type="text" 
                className="form-control" />
            
            <button onClick={registerUser} className="btn btn-primary">Register</button>
            <button onClick={closeSignUp} className="btn btn-danger">Cancel</button>

            
			{localState.successMessage && <div className="alert alert-success">Congrats!</div>} 
			{localState.errorMessage && <div className="alert alert-danger">Something went wrong.</div>}        
        
    </div>)
}

export default SignUpWindow;