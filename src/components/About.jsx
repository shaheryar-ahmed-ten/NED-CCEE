import React from 'react'
import {Outlet,Link} from 'react-router-dom'

export default function About() {
  return (
      <div>
          <Outlet />
          <h1>About</h1>
            <Link to="info">go to Info</Link>
      </div>
  )
}
