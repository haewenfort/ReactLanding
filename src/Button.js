import React from 'react';

const Button = (prop) => {
    return (
        <button onClick={prop.clickFunction} className="btn btn-primary">{prop.children}</button>
    )
}

export default Button;