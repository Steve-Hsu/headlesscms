import React, { useContext, useEffect } from 'react';
import Navbar from '../Navbar';
import NavbarContext from '../../context/navbar/navbarContext';
import PDataContext from '../../context/pageData/pDataContext';
import DisplayComponents from '../displayComponents'


const Page_2 = () => {
  const navbarContext = useContext(NavbarContext);
  const pDataContext = useContext(PDataContext);
  const { route_2 } = navbarContext
  const { dataName, getPData, pData } = pDataContext;
  const data = pData || [{ data: "empty" }];
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
        <DisplayComponents data={data} />
      </div>
    </div>
  )
}

export default Page_2
