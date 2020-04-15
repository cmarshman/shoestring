import React, { useEffect } from 'react';
import $ from 'jquery';
function FriendsModal() {
    useEffect(() => {
        const modal = $('#friendSelector');
        $("#friendSelector").on('click', '.friend', function(){
            // const friendAttribute = $(this).attr('data-friend');
            // $('#friendName').text(friendAttribute);
            modal.addClass('is-active');
        })
        $('.close-modal').on('click', function (){
            modal.removeClass('is-active');
        });
    })
    return (
        <>
            <div className="modal" id="friendSelector">
                <div className="modal-background close-modal"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title" id="friendName"></p>
                        <button className="delete close-modal" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button close-modal" onClick={useEffect}>Cancel</button>
                    </footer>
                </div>
            </div>
        </>
    )
}
export default FriendsModal;

