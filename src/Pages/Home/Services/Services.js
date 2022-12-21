import React from 'react';
import circle from '../../../assets/images/fluoride.png'
import spring from '../../../assets/images/cavity.png'
import white from '../../../assets/images/whitening.png'
import Service from './Service';


const Services = () => {
    const services = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: circle
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: spring
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: white
        },
    ]
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-20 py-20'>
            {
                services.map(service => <Service key={service.id} service={service}></Service>)
            }
        </div>
    );
};

export default Services;