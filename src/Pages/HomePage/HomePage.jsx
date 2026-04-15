import React from "react";
import KeepFriends from "../../component/KeepsFriendBar/KeepFriends";
import TotalFriendSection from "../../component/TotalFriendSection/TotalFriendSection";
import FriendsCardSection from "../../component/ContextApi/ContextApi";
import CardsSection from "../../component/CardsSection/CardsSection";

const HomePage = () => {
  return (
    <div className="bg-[#F8FAFC] py-20">
      <KeepFriends />
      <TotalFriendSection />
      <CardsSection />
    </div>
  );
};

export default HomePage;
