import React from "react";
import friends from "../../utils/friendList.json";

function Card() {
    return (
        <div className="tile is-3 is-child box">
            {friends.map(item => (
                <article key={item.id} className="media">
                    <figure className="media-left" id="block">
                        <p className="image is-48x48" id="friendPic">
                            <img className="is-rounded"src="https://bulma.io/images/placeholders/96x96.png" alt="userImage" />
                        </p>
                    </figure>
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