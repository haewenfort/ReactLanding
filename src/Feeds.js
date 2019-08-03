import React, {useContext} from 'react';
import NavBar from './NavBar';
import RegisterLogin from './RegisterLogin';
import FeedMedia from './FeedMedia';
import { AppContext } from './App'

const Feeds = () => {

    const [state, setState] = useContext(AppContext)

    return (
        <div className="Feeds">
            <NavBar />
            <div className="container">
                <h1>The Feeds Page</h1>
                <FeedMedia />
            </div>
            {state.signUpForm && <RegisterLogin />}
        </div>
    )
}

export default Feeds;