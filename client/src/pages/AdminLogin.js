import React from 'react';
import httpAdmin from '../httpAdmin'
import Nav from '../components/navbar';
import '../pages/design/login.css';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import $ from 'jquery';

const validationSchenma = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required().min(8),
     
});

const AdminLogin = (email, password) =>{
    
    const { values, touched, errors, handleChange, handleBlur, handleSubmit, isSubmitting } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchenma,
        onSubmit(values) {
            handleLoginOnsubmit(values)        
        }
    });
    
    function handleLoginOnsubmit(evt) {
        evt.preventDefault()
        const alladmin = {...values}
		httpAdmin.logIn(alladmin).then(admin => {
            console.log("admin", admin )
            if(admin){
                window.location.replace("/userAdmin") ;
                this.props.onLoginSuccess(admin);
				this.props.history.push('/');
            }
            $('#loginerrMsg').attr("style", "color:red", 'border: solid 1px')
            $('#loginerrMsg').text("Your Email or Password is incorrect, please check and try again.");

             return
           }).catch(err => console.log('err', err));
   }

    return (
        <>
        <Nav/>
        <form onSubmit={handleLoginOnsubmit}>
        <div id='loginerrMsg'  ></div>
        <div className="tile is-ancestor">
        <div className="tile is vertical is-7 box" id="tile">

          <div className="tile is-parent">
            <article className="tile is-child notification is-dark">

              <div className="field">

                        <label className="label">Email</label>
                        <p className="control has-icons-left has-icons-right">
                            <input className="input" type="email" placeholder="Email"
                                name="email"
                                values={email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Email (required)"
                            />
                             {values.email.length < 10 &&  touched.email && 'errors' ? (
                              <p className="errMsg">Please enter a valid email</p>
                            ): ''}
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                            <span className="icon is-small is-right">
                                <i className="fas fa-check"></i>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <p className="control has-icons-left">
                            <input className="input" type="password" placeholder="Password"
                                values={password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="password"
                                placeholder="Password (required)"
                             />
                             {values.password.length < 8 &&  touched.password && 'errors' ?   (
                              <p className="errMsg">Please enter a valid password</p>
                            ): ''}
                            <span className="icon is-small is-left">
                                <i className="fas fa-lock"></i>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control">
                            <button type="submit"
                                id="honey"
                                className="button is-light"
                               disabled={!values.email && !values.password  && 'errors'} 
                            >
                            Login
                            </button>
                            <a href="/reset" className='subtitle'id='resetpwd'>Forgot Password</a>
                        </p>

                    </div>
                    </article>
                </div>
            </div>
            </div>
            </form>
        </>
    )
}

export default AdminLogin;