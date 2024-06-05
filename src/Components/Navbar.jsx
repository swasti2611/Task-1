import React from 'react'
import '../styles/navbar.css'
import Logo from './Logo'
import Search from './Search'
import BecomeSeller from './BecomeSeller'
const Navbar = () => {
  return (
    <>
        <div style={{display:'flex',justifyContent:'space-around',padding:'44px'}}>
         <Logo/>
         <Search/>
         <BecomeSeller/>
        </div>
    </>
  )
}

export default Navbar
