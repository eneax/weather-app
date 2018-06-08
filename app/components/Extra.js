import React from 'react';
import { Link } from 'react-router-dom';

const Extra = (props) => {
  return (
    <table className='table mx-auto text-center'>
      <thead className='thead-dark'>
        <tr>
          <th scope='col'>More</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope='row'>{props.children}</th>
        </tr>
        <tr>
          <th scope='row'>
            <Link to='/'>
              Back to home screen
            </Link>
          </th>
        </tr>
      </tbody>
    </table>
  )
}

export default Extra;