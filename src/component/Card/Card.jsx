import React, { use } from "react";
import { Link } from "react-router";

const Card = ({cardData}) => {
    const deta = use(cardData)
    console.log(deta);
    
  return (
    <>
    {
        deta.map((card)=>{
          return <Link  key={card.id} to={`friendsdetails/${card.id}`}> <div className="card bg-base-100  shadow-sm text-center">
              
      <figure>
        <img
          src={card.picture}
          alt="Shoes"
          />
      </figure>
      <div className="card-body">
        <h2 className="">{card.name}</h2>
        <p>
          {card.days_since_contact}d ago
        </p>
            
            <div className=" flex mx-auto  justify-center gap-2.5">

            {card.tags.map((id,index)=><h2 key={index} className="bg-[#CBFADB] p-2.5 rounded" >{id}</h2>)}
            </div>
            <p>{card.status}</p>
        
      </div>
    </div>
          </Link>
        })
    }
    </>
  );
};

export default Card;
