import React, { useReducer } from 'react';
import NavbarContext from './navbarContext';
import navbarReducer from './navbarReducer'

const NavbarState = (props) => {
  const initialState = {
    page_1: 'default_1',
    page_2: 'default_2'
  }


  const [state, dispatch] = useReducer(navbarReducer, initialState);


  return (
    <NavbarContext.Provider
      value={{
        navbar: state.navbar,
      }}
    >
      {props.children}
    </NavbarContext.Provider>
  )
}
export default NavbarState;