import React, {useContext} from 'react';
import NavBar from './NavBar';
import RegisterLogin from './RegisterLogin';
import {AppContext} from './App';

const About = () => {
  const [state,setState] = useContext(AppContext);

  return (
   	<div className="About">
		<NavBar />
		<div className="container">
			<h1>About us</h1>
			<p>We are the ABC company...</p>
		</div>
		{state.signUpForm && <RegisterLogin/>}
	</div>
  );
}

export default About;
