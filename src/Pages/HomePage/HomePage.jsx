import React from 'react';
import KeepFriends from '../../component/KeepsFriendBar/KeepFriends';
import TotalFriendSection from '../../component/TotalFriendSection/TotalFriendSection';

const HomePage = () => {
    return (
        <div className='bg-[#F8FAFC] py-20'>
           <KeepFriends/>
           <TotalFriendSection/>
        </div>
    );
};

export default HomePage;