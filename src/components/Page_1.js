import React, { useContext, useEffect } from 'react';
import Navbar from './Navbar';
import NavbarContext from '../context/navbar/navbarContext';
import PDataContext from '../context/pageData/pDataContext';


const Page_1 = ({ props }) => {
  const navbarContext = useContext(NavbarContext);
  const pDataContext = useContext(PDataContext);
  const { route_1 } = navbarContext
  const { dataName, getPData } = pDataContext;


  useEffect(() => {
    if (dataName != route_1) {
      getPData(route_1);
    }
    console.log('page_1')
  })


  return (
    <div>
      <Navbar />
      <div className='container container-with-navbar'>
        Hello World here is page_1
      </div>
    </div>
  )
}

export default Page_1
