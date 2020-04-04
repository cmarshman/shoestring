import React from "react";
import friends from "../../utils/friendList.json";
import { Link, withRouter } from 'react-router-dom';


function Card(item) {

    
    return (
        <div className="tile is-child box has-text-centered">
            {friends.map(item => (
                <article key={item.id} className="media">
                    <figure className="media-left" id="block">
                        <p className="image is-48x48" id="friendPic">
                            <img className="is-rounded" src={item.image} alt="userImage" />
                        </p>
                    </figure>
                    <div>
                        <Link to={`/user-profile/${item.name}`} className="title" id="name">{item.name}</Link>
                        <h3 className="has-text-left" id="location">{item.location}</h3>
                    </div>

                </article>
            ))}
        </div>

    );
}

export default withRouter (Card);