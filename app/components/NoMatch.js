import React from 'react';

const NoMatch = () => {
  return (
    <div className='cover-container d-flex w-100 h-100 p-3 mx-auto flex-column text-center'>
      <main role='main' className='inner cover'>
        <h1 className='cover-heading'>404</h1>
        <p className='lead'>Sorry, we can't find the page you are looking for.</p>
      </main>
    </div>
  )
}

export default NoMatch;