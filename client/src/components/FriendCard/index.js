import React from "react";
import friends from "../../utils/friendList.json";

function Card() {
    return (
        <div className="columns is-multiline">
            {friends.map(item => (
                <div key={item.id} className="column is-one-third">
                    <article className="title is-child has-text-centered" id="block">
                        <p className="title" id="name">{item.name}</p>
                        <p className="subtitle" id="location">{item.location}</p>
                    </article>
                </div>
            ))}
        </div>

    );
}

export default Card;