import React from "react";
import friends from "../../utils/friendList.json";
import './style.css';


function Card() {
    return (
        <div className="tile is-child box has-text-centered" id="pinkDuck">  
            {friends.map(item => (
                <article key={item.id} className="media">
                    <div className="media-left" id="block">
                        <figure className="image" id="friendPic">
                            <img id="userPhoto" className="is-rounded" src={item.image} alt="userImage" />
                        </figure>
                    </div>
                    <div>
                        <h1 className="has-text-weight-semibold has-text-left" id="name">{item.name}</h1>
                        <h3 className="has-text-left" id="location">{item.location}</h3>
                    </div>

                </article>
            ))}
        </div>

    );
}

export default Card;