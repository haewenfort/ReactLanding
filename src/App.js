import React, {useState, createContext} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Feeds from './Feeds';

import './App.css';

export const AppContext = createContext();

const App = () => { 

	const [state, setState] = useState({signUpForm: false, progress: 'Signup'});


  return (
	
    <AppContext.Provider value={[state, setState]}>
   	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/about" component={About} />
			<Route path="/feeds" component={Feeds} />
		</Switch>
	</BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
