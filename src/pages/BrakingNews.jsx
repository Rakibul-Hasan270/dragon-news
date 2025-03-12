import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router';

const BrakingNews = () => {
    return (
        <div className='flex items-center'>
            <button className='btn btn-secondary'>Braking News</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link className='mr-6' to='/'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as.......</Link>
                <Link className='mr-6' to='/'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as.......</Link>
                <Link className='mr-6' to='/'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as.......</Link>
            </Marquee>
        </div>
    );
};

export default BrakingNews;