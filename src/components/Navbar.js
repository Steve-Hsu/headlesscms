import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavbarContext from '../context/navbar/navbarContext'

const Navbar = () => {
  const navbarContext = useContext(NavbarContext);
  const { route_1, route_2, didGetRoutes, getRouteName } = navbarContext;


  useEffect(() => {
    if (!didGetRoutes) getRouteName();
  });



  return (
    <div className='navbar bd-light-b-2px bg-white'>
      {[route_1, route_2].map((i) => {
        console.log("the i in navBar", i)
        return (
          <Link key={'link' + i} to={'/' + i} >{i}</Link>
        )
      })}
    </div>
  )
}

export default Navbar
