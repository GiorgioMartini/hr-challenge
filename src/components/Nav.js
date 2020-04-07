import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/add' activeClassName='active'>
            Add Friend
          </NavLink>
        </li>
        <li>
          <NavLink to='/search' activeClassName='active'>
            Search
          </NavLink>
        </li>
      </ul>
    </nav>
  )
} 