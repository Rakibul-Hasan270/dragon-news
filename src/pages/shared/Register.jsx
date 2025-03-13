import React, { useContext } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handelRegisterSubmit = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        createUser(email, password)
            .then(res => {
                console.log(res.user)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <h2 className='text-3xl text-center'>Register Your Account</h2>

            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handelRegisterSubmit} className="fieldset">
                                <label className="fieldset-label">Name</label>
                                <input name='name' type="text" className="input" placeholder="Email" />
                                <label className="fieldset-label">Photo URL</label>
                                <input name='photo' type="text" className="input" placeholder="Photo URL" />
                                <label className="fieldset-label">Email</label>
                                <input name='email' type="email" className="input" placeholder="Email" />
                                <label className="fieldset-label">Password</label>
                                <input name='password' type="password" className="input" placeholder="Password" />
                                <div className='flex items-center gap-2'>
                                    <input type="checkbox" name="terms" id="" />
                                    <label htmlFor="terms">Accept Term & Conditions</label>
                                </div>
                                <button className="btn btn-neutral mt-4">Register</button>
                            </form>
                            <p>Already have an account? <Link className='text-red-500' to='/login'>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;