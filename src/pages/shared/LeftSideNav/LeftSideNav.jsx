import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h2 className='mb-2.5 font-bold'>All Categories</h2>
            <div className='p-2.5'>
                {
                    categories.map(info => <Link
                        to={`/info/${info.id}`}
                        key={info.id}
                        className='flex flex-col mb-2 hover:underline cursor-pointer'>{info.name}</Link>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav; 