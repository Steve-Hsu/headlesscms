import axios from 'axios';
import React, { useReducer } from 'react';
import NavbarContext from './navbarContext';
import navbarReducer from './navbarReducer'
import { GET_NAVBAR_TITLES } from '../type'

const NavbarState = (props) => {
  const initialState = {
    route_1: 'default_1',
    route_2: 'default_2',
    didGetRoutes: false,
  }


  const [state, dispatch] = useReducer(navbarReducer, initialState);
  const { route_1, route_2, didGetRoutes } = state;

  const getRouteName = async () => {
    const routes = await axios.get('https://raw.githubusercontent.com/Bounteous-Inc/headless-cms-assessment/main/routes.json');
    console.log('the routes', routes.data[Object.keys(routes.data)[0]])
    if (routes.data) {
      dispatch({ type: GET_NAVBAR_TITLES, payload: routes.data });
      return;
    }
    return;
  }


  return (
    <NavbarContext.Provider
      value={{
        route_1: route_1,
        route_2: route_2,
        didGetRoutes: didGetRoutes,
        getRouteName
      }}
    >
      {props.children}
    </NavbarContext.Provider>
  )
}
export default NavbarState;