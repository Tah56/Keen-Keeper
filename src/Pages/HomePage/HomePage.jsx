import React from 'react';
import KeepFriends from '../../component/KeepsFriendBar/KeepFriends';
import TotalFriendSection from '../../component/TotalFriendSection/TotalFriendSection';
import FriendsCardSection from '../../component/FriendsCardSection/FriendsCardSection';

const HomePage = () => {
    return (
        <div className='bg-[#F8FAFC] py-20'>
           <KeepFriends/>
           <TotalFriendSection/>
           <FriendsCardSection/>
        </div>
    );
};

export default HomePage;