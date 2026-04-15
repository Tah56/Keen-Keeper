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
        <div className='w-10/12 mx-auto'>
            <h2>Yours Friend</h2>
        
            <Suspense fallback={<div className="flex justify-center items-center ">

                <span className="loading loading-spinner loading-xl"></span>
            </div>
        }>
        <div className='  grid lg:grid-cols-3 gap-10'>

            <Card cardData={cardData}/>
        </div>
            </Suspense>
        </div>
    );
};

export default CardsSection;