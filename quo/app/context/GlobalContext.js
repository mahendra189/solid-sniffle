// context/GlobalContext.js
import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();
import data from '../constants/data';
export const GlobalProvider = ({ children }) => {
    const [templates, setTemplates] = useState(data);

    return (
        <GlobalContext.Provider value={{ templates, setTemplates }}>
            {children}
        </GlobalContext.Provider>
    );
};
