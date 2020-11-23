import React from 'react'
import './Header.css'
export default function Header() {
    return (
    <div className='navbar'>
      <div className='container flex'>
          <h1 className='logo'>A Site</h1>
          <nav>
              <ul>
                  <li><a href='#showcase'>Home</a></li>
                  <li><a href='#stats'>Portfolio</a></li>
                  <li><a href='#cli'>Cli</a></li>
              </ul>
          </nav>
      </div>
    </div>
    )
}
