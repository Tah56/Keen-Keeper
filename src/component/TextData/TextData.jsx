
import React, { useContext } from 'react';
import { friendData } from '../ContextApi/ContextApi';
import { BsChatRightTextFill } from 'react-icons/bs';

const TextData = () => {
     const context = useContext(friendData);
  const { nam } = context;
    return (
           <div>
      {nam.length === 0 ? (
        <h2>{nam.length}</h2>
      ) : (
        <div className=''>
          {nam.map((data,i) => {
            return (
              <ul key={i} className="list bg-base-100 rounded-box shadow-md mb-5">
                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide"></li>

                <li className="list-row">
                  <div>
                    <BsChatRightTextFill />
                  </div>
                  <div>
                    <div>{data.name}</div>
                    <div className="text-xs uppercase font-semibold opacity-60">
                      with {data.type} {data.date}
                    </div>
                  </div>
                  <button className="btn btn-square btn-ghost">
                    <svg
                      className="size-[1.2em]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M6 3L20 12 6 21 6 3z"></path>
                      </g>
                    </svg>
                  </button>
                  <button className="btn btn-square btn-ghost">
                    <svg
                      className="size-[1.2em]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                      </g>
                    </svg>
                  </button>
                </li>
              </ul>
            );
          })}
        </div>
      )}
    </div>
    );
};

export default TextData;