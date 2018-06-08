import React from 'react';
import Search from './Search';

const Home = (props) => {
  return (
    <div className='cover-container d-flex w-100 h-100 mx-auto flex-column'>
      <main role='main' className='cover inner'>
        <h1 className='cover-heading text-center text-monospace'>Weather Forecast</h1>
        <p className='lead'>Weather Forecast is an interactive weather application with a clean and minimal interface. Track the weather today and for the next five days and get detailed information on temperature,	condition of clouds and more.</p>
        <div className='d-flex justify-content-center'>
          <Search onSubmit={props.onSubmit} />
        </div>
      </main>
    </div>
  )
}

export default Home;