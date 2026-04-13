import React, { Suspense, use } from 'react';
import Card from '../Card/Card';

    

const friendsData = async ()=>{
    const res = await fetch("/friendsData.json")
    const data = await res.json()
    
    return data
}
const CardsSection = () => {
    // const frndDatas =  friendsData
    // const datas =use(frndDatas)
    // console.log(frndDatas);
    const cardData = friendsData()
    
 
    

    
    return (
        <div className='grid lg:grid-cols-3 gap-10'>
            <Suspense>

            <Card cardData={cardData}/>
            </Suspense>
        </div>
    );
};

export default CardsSection;