import React from 'react';
import './style.css';
import friends from '../../utils/friendList.json';

function FindFriends () {
    return(
        <>
        <section className="hero is-medium" id="friend_search">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        Find a friend
                    </h1>
                    <div className="field">
                        <div className="control">
                            <input className="input" type="text" placeholder="Friend's Name"/>
                        </div>
                    </div>  
                </div>
            </div>    
        </section>
        <section className="hero is-medium" id="friend_search">
            <div className="hero-body">
                <div columnName="columns is-multiline">
                    {friends.map(item => (
                        <div key={item.id} className="column is-one-third" id="blue">
                        <article  className="tile is-child notification has-text-centered" id="block">
                                <p class="image">
                                    <img className="is-rounded"  src={item.image} alt={item.name} />
                                </p>
                                <p className="subtitle" >{item.name}</p>
                                <p className="" >{item.location}</p>
                                <hr />
                                <a className="button is-dark is-medium deposit" id="friend">Friend</a>
                                <a className="button is-dark is-medium deposit" id="sendMoney">Send Money</a>
                        </article>
                        </div>
                    ))}
                </div>

            </div>
        </section>        
        </>
    );
}

export default FindFriends; 