import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <div>
            <nav className='nav_bar d-flex align-items-center'>
                <div className='container'>
                    <div className='d-flex justify-content-between'>
                        <a className='nav_logo' href="">Logo</a>
                        <input type='checkbox' id='menuIcon' hidden />
                        <ul className='ps-0 mb-0 d-flex menuList align-items-center gap-4'>
                            <Link to='/' className='nav_text'>Home</Link>
                            <Link to='/features' className='nav_text'>How It Works</Link>
                            <li><a className='nav_text' href="">Testimonials</a></li>
                            <li><a className='nav_text' href="">Why Choose Us</a></li>
                        </ul>
                        <label for='menuIcon' className='d-lg-none d-flex'>
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header