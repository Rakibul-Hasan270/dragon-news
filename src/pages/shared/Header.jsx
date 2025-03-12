import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='mt-6 space-y-1.5'>
            <img className='mx-auto' src={logo} alt="" />
            <p className='text-center text-xl'>Journalism Without Fear or Favour</p>
            <p className='text-center'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;