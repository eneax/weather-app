import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

const Navbar = (props) => {
  return (
    <nav className='navbar navbar-expand-md navbar-light bg-light mb-5'>
      <Link className='navbar-brand' to='/'>
        <i className='fas fa-sun fa-2x fa-pulse align-middle'></i> <span className='align-middle'>Weather Forecast</span>
      </Link>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarTogglerDemo02' aria-controls='navbarTogglerDemo02' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse justify-content-end' id='navbarTogglerDemo02'>
        <Search onSubmit={props.onSubmit} />
      </div>
    </nav>
  )
}

export default Navbar;