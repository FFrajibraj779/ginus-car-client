import React from 'react';
import img from '../../assets/images/about_us/person.jpg'
import img1 from '../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div>
           
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-1/2 relative'>

                    <img src={img} className="rounded-lg shadow-2xl" />
                    <img src={img1} className='absolute w-7/12 top-3/4 right-0  rounded-lg' alt="" />

                    </div>
                    <div className='w-1/2'>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;