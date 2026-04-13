import React from 'react';
import CardsSection from '../CardsSection/CardsSection';

const FriendsCardSection = () => {
    return (
        <div className='border w-10/12 mx-auto mt-10'>
            <h2 className='font-semibold text-2xl'>Your Friends</h2>
            <div>
                
                <CardsSection/>
            </div>
        </div>
    );
};

export default FriendsCardSection;