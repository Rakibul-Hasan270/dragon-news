import React from 'react';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;