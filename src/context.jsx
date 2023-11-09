import { createContext, useReducer, useContext } from "react";
import PropTypes from "prop-types";

const AppContext = createContext();

const initialState = {
  // Define your initial state here
};

const appReducer = (state, action) => {
  // Define your reducer function here
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Define PropTypes for the children prop
AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};



const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
