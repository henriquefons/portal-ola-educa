import React, { useState } from 'react';
import StoreContext from './context';

const StoreProvider = ({ ...children }) => {
  const [searchAplication, setSearchAplication] = useState(null);

  return (
    <StoreContext.Provider
      value={{
        searchAplication,
        setSearchAplication,
      }}
    >
      {children.children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
