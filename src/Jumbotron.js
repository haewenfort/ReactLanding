import React, {useState} from 'react';
import Button from './Button'


const Jumbotron = (prop) => {
	
	const [registered,setRegistered] = useState(false);
	
	const registerUser = () => {
		setRegistered(true);
	}
	
    return (
      <div className={`Jumbotron jumbotron ${prop.location}`}
      style={{backgroundImage: `url('${prop.img}')` }}>
        <div className="container">
            <div className="row">
				
                <div className="col-xl-9 mx-auto">
                  <h1 className={prop.scheme}>{prop.title}</h1>
				        </div>
            </div>
        </div>
      </div>
    )
  }

export default Jumbotron;