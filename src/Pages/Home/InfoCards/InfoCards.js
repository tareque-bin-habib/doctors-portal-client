import React from 'react';
import icon1 from '../../../assets/icons/clock.svg'
import icon2 from '../../../assets/icons/marker.svg'
import icon3 from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';


const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Openning hours',
            description: 'Open 9am to 5pm everyday',
            icon: icon1,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Visit our location',
            description: 'Brooklyn, NY 10036, United States',
            icon: icon2,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact us now',
            description: '+000 123 456789',
            icon: icon3,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
    ]
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-20'>
            {
                cardData.map(card => <InfoCard key={card.id} card={card}></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;