import React from 'react';

export const Avatar = (prop) => {
	return (
		<div className="Avatar">
			<img src={prop.img} />
			<p className="title">{prop.title}</p>
			<p className="caption">{prop.caption}</p>
		</div>
	)
}

export const AvatarGroup = (prop) => {
	return (
        <div className="AvatarGroup container-fluid">
			{
				prop.title && <h2>{prop.title}</h2>
			}
            <div className="container">
                {prop.children}
            </div>
        </div>

	)
}

export default AvatarGroup;