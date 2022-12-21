import React from 'react';
import bannerImage from '../../../assets/images/chair.png'
import './Banner.css'
const Banner = () => {
    return (
        <div className="hero py-20 banner">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bannerImage} className=" lg:w-1/2 rounded-lg shadow-2xl banner-image" alt='' />
                <div className='pr-20'>
                    <h1 className="text-5xl font-bold">Your New Smile Starts <br /> Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. </p>
                    <button className="btn btn-primary  bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;