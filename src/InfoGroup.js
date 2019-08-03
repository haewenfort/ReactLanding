import React from 'react';

export const Info = (prop) => {
    return(
        <div className="Info">
        <i className={prop.iconClass}></i>
        <h3>{prop.title}</h3>
        <p>{prop.caption}</p>
        </div>
    )
}

export const InfoGroup = (prop) => {
    return (
        <div className="InfoGroup container-fluid">
            <div className="container">
                {prop.children}
            </div>
        </div>
    )
}

export default InfoGroup;