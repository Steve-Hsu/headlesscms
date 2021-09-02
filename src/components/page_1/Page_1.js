import React, { useContext, useEffect } from 'react';
import Navbar from '../Navbar';
import NavbarContext from '../../context/navbar/navbarContext';
import PDataContext from '../../context/pageData/pDataContext';
import DisplayComponents from '../displayComponents'


const Page_1 = ({ props }) => {
  const navbarContext = useContext(NavbarContext);
  const pDataContext = useContext(PDataContext);
  const { route_1 } = navbarContext
  const { dataName, getPData, pData } = pDataContext;
  const data = pData || [{ data: "empty" }];


  useEffect(() => {
    if (dataName != route_1) {
      getPData(route_1);
    }
    console.log('page_1')
  })

  return (
    <>
      <Navbar />
      <div className='container container-with-navbar'>
        <DisplayComponents data={data} />
      </div>
    </>
  )
}

export default Page_1
