import React from 'react';
import { useState, useEffect } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(' https://car-servar-side.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    return (
        <div>
            <h1 className='text-2xl font-bold text-center'>services area </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    services.map(singledata => <ServiceCard
                        key={singledata?._id}
                        singledata={singledata}
                    ></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Services;