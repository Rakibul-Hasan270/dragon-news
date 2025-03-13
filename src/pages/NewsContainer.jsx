import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { RiEyeFill } from "react-icons/ri";
import { Link } from "react-router";


const NewsContainer = ({ info }) => {

    const { author, details, image_url, rating, title, total_view, _id } = info;
    return (
        <div>
            <div className='mb-4 mt-8 flex justify-between'>
                <div className='flex items-center gap-1.5 space-y-2'>
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
            <span className='cursor-pointer border-b pb-3'>
                {
                    details.length > 200 ? <p>{details.slice(0, 200)} <Link to={`/info/${_id}`} className="text-blue-600 font-bold">Read More....</Link></p> : <p>{details}</p>
                }
            </span>

            <div className='flex items-center justify-between mt-6'>
                <div className='flex items-center gap-8'>
                    <div className="rating">
                        <input type="radio" name="rating-9" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                        <input type="radio" name="rating-9" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                        <input type="radio" name="rating-9" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                        <input type="radio" name="rating-9" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                    </div>
                    <div>
                        <p>{rating.number}</p>
                    </div>
                </div>
                <div className='flex items-center gap-1.5'>
                    <span><RiEyeFill></RiEyeFill></span>
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsContainer;