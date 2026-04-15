'use client';

import React, { createContext, use } from 'react';
import { data } from 'react-router';

export const friendData = createContext()

const ContextApi = ({children}) => {



    return (
        <friendData.Provider>
            {children}
        </friendData.Provider>
    );
};

export default ContextApi;