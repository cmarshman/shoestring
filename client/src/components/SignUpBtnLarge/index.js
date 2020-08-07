import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function SignUpBtnLarge() {
    return (
        <Link to="/sign-up" className="button is-light" id="signup">
            <p>Sign Up</p>
        </Link>
    );
}

export default SignUpBtnLarge;