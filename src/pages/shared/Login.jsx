import React, { useContext } from 'react';
import Navbar from './Navbar';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handelSignIn = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        signIn(email, password)
            .then(res => {
                console.log(res.user);

                navigate(location?.state ? location.state : '/');

            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <h2 className='text-3xl text-center'>Login Your Account</h2>

            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handelSignIn} className="fieldset">
                                <label className="fieldset-label">Email</label>
                                <input name='email' type="email" className="input" placeholder="Email" />
                                <label className="fieldset-label">Password</label>
                                <input name='password' type="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </form>
                            <p>Do not Have An Account ? <Link className='text-red-500' to='/register'>Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;