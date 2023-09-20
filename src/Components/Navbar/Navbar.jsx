import React, { useState } from 'react'
import './navbar.css'
import { SiYourtraveldottv } from 'react-icons/si'
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb'

const Navbar = () => {
  // code to toggle/show navBar
  const [active, setActive] = useState('navBar')
  const showNav = () => {
    setActive('navBar activeNavbar')
  }

  // code to remove Navbar
  const removeNav = () => {
    setActive('navBar')
  }

  return (
    <section className='navBarSection'>
      <div className='header'>
        <div className='logoDiv'>
          <a href='#' className='logo'>
            <h1 className='flex'>
              <SiYourtraveldottv className='icon' />
              Trip
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className='navList flex'>
            <li className='navItem'>
              <a href='#' className='navlink'>
                Home
              </a>
            </li>

            <li className='navItem'>
              <a href='#' className='navlink'>
                Products
              </a>
            </li>

            <li className='navItem'>
              <a href='#' className='navlink'>
                Resource
              </a>
            </li>

            <li className='navItem'>
              <a href='#' className='navlink'>
                Contact
              </a>
            </li>

            <li className='navItem'>
              <a href='#' className='navlink'>
                Blog
              </a>
            </li>

            <div className='headerBtns flex'>
              <button className='btn loginBtn'>
                <a href='#'>Login</a>
              </button>
              <button className='btn'>
                <a href='#'>Sign Up</a>
              </button>
            </div>
          </ul>

          <div onClick={removeNav} className='closeNavbar'>
            <AiFillCloseCircle className='icon' />
          </div>
        </div>

        <div onClick={showNav} className='toggleNavbar'>
          <TbGridDots className='icon' />
        </div>
      </div>
    </section>
  )
}

export default Navbar
