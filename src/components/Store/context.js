import { createContext } from 'react';

const StoreContext = createContext({
  searchAplication: null,
  setSearchAplication: () => {},
});

export default StoreContext;
