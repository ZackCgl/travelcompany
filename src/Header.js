import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Header() {

  const navigate = useNavigate();

  const handleReload = (e) => {
    navigate("/")
    window.location.reload();
  }
  return (
    <div className='header'>
        <img onClick={handleReload} className='header__img' src='https://i2.wp.com/timaf.org/wp-content/uploads/2018/10/KLM-Royal-Dutch-Airlines-Logo.png?ssl=1' alt=''></img>
    </div>
  )
}

export default Header