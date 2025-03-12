import React from 'react';
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";


const NewsContainer = ({ info }) => {
    console.log(info)
    const { author, details, image_url, rating, thumbnail_url, title, total_view } = info;
    return (
        <div>
            <div className='mb-4 mt-8 flex justify-between'>
                <div className='flex gap-1.5 space-y-2'>
                    <div>
                        <img className='w-10 rounded-full' src={author?.img} alt="" />
                    </div>
                    <div>
                        <p>{author?.name}</p>
                        <p>{author.published_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2.5'>
                    <p><CiBookmark /></p>
                    <p><CiShare2></CiShare2></p>
                </div>
            </div>
            <p className='text-xl font-semibold'>{title}</p>
            <img src={image_url} alt="" />
            <p className='mt-4'>{details}</p>
        </div>
    );
};

export default NewsContainer;