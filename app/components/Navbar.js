import React from 'react';
import Search from './Search';

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
      <i className="fas fa-sun fa-2x fa-pulse"></i>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
        </ul>
        <Search onSubmit={props.onSubmit} />
      </div>
    </nav>
  )
}

module.exports = Navbar;