import React, { useContext, useEffect } from 'react';
import Navbar from '../Navbar';
import NavbarContext from '../../context/navbar/navbarContext';
import PDataContext from '../../context/pageData/pDataContext';


const Page_2 = () => {
  const navbarContext = useContext(NavbarContext);
  const pDataContext = useContext(PDataContext);
  const { route_2 } = navbarContext
  const { dataName, getPData } = pDataContext;
  useEffect(() => {
    if (dataName != route_2) {
      getPData(route_2);
    }
    console.log('page_1')
  })
  return (
    <div>
      <Navbar />
      <div className='container container-with-navbar'>
        Hello World here is page_2
      </div>
    </div>
  )
}

export default Page_2
