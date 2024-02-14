import { createContext } from 'react';

const navContext = createContext({
  isNavOpen: false,
  setNavOpen: (open) => {},
});

export default navContext;
