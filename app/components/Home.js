import React from 'react';
import Search from './Search';
import Navbar from './Navbar';

const Home = (props) => {
  return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column text-center">
      <main role="main" className="inner cover">
        <h1 className="cover-heading">Weather Forecast</h1>
        <p className="lead">Weather Forecast is an engaging and interactive weather application with a clean and minimal interface. Track the weather today and for the next five days and get detailed information on temperature,	condition of clouds and level of humidity.</p>
        <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
          <Search onSubmit={props.onSubmit} />
        </div>
      </main>
    </div>
  )
}

module.exports = Home;