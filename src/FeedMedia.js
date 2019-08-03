import React from 'react';

const FeedMedia = () => {
    return(
        <div className="feed media">
            <img src="https://cdn4.buysellads.net/uu/1/41369/1551199042-Adobe_Stock_260x200-3.jpg" 
            className="mr-3" alt="..." />
            <div className="media-body">
                <h5 className="mt-0">Media heading</h5>
                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                <button className="btn btn-primary">Follow</button>
            </div>
        </div>
    )
}

export default FeedMedia;