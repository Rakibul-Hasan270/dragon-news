import React from 'react';
import { FaGoogle, FaInstagram, FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";
import swim from '../../../assets/swimming.png'
import classX from '../../../assets/class.png'
import playGround from '../../../assets/playground.png'

const RightSideNav = () => {
    return (
        <div className=''>
            <div className=''>
                <h2 className='mb-2.5 font-bold'>Login With</h2>
                <button className="btn btn-outline mb-1.5">
                    <FaGoogle />
                    <p>Logion with Google</p>
                </button>
                <button className="btn btn-outline">
                    <FaGithub />
                    <p>Logion with Github</p>
                </button>
            </div>
            {/* second div */}
            <div className='flex flex-col mb-10'>
                <h2 className='font-bold'>Find Us On</h2>
                <button className="btn">
                    <FaFacebook />
                    <p>Facebook</p>
                </button>
                <button className="btn">
                    <FaTwitter />
                    <p>Twitter</p>
                </button>
                <button className="btn">
                    <FaInstagram />
                    <p>Instagram</p>
                </button>
            </div>
            {/* third div  */}
            <div className='p-2'>
                <h2 className='font-bold'>Q-Zone</h2>
                <div className='mb-1.5'>
                    <img src={swim} alt="" />
                    <p className='text-center'>Swimming</p>
                </div>
                <div className='mb-1.5'>
                    <img src={classX} alt="" />
                    <p className='text-center'>Class</p>
                </div>
                <div className='mb-1.5'>
                    <img src={playGround} alt="" />
                    <p className='text-center'>Playground</p>
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;