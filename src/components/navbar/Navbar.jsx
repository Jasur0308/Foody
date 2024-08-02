import React from 'react'
import './Navbar.css'
import navbarLogo from '../../images/navbar-logo.svg'
import menuArrow from '../../images/menu-arrow.svg'
import loop from '../../images/loop.svg'
import bag from '../../images/bag.svg'
import login from '../../images/login.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="navbar__wrapper">
                <img src={navbarLogo} alt="" />
                <ul className="navbar__lists">
                    <li className="navbar__list__item">
                        <a className='navbar__item__link' href="#">Home</a>
                    </li>
                    <li className="navbar__list__item">
                        <a className='navbar__item__link' href="#">Service</a>
                    </li>
                    <li className="navbar__list__item">
                        <a className='navbar__item__link' href="#">
                            <span>Menu</span>
                            <img src={menuArrow} alt="" />
                        </a>
                    </li>
                    <li className="navbar__list__item">
                        <a className='navbar__item__link' href="#">Help</a>
                    </li>
                </ul>
                <div className="navbar__extra">
                    <a className='loop' href="#">
                        <img src={loop} alt="" />
                    </a>
                    <a className='bag' href="#">
                        <img src={bag} alt="" />
                    </a>
                    <a className='navbar__login' href="#">
                        <img src={login} alt="" />
                        <span className='login'>Login</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar