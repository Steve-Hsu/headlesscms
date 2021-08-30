import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar bd-light-b-2px bg-white'>
      {['Page_1', 'Page_2'].map((i) => {
        return (<Link key={'link' + i} to={'/' + i.toLowerCase()} >{i}</Link>)
      })}
    </div>
  )
}

export default Navbar
