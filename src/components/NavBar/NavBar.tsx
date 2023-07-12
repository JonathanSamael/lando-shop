// import React from 'react';
import { MenuBar, NavBarItem } from './NavBar.styled';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <MenuBar>
      <Link to={'/'}>
        <NavBarItem>Home</NavBarItem>
      </Link>
      <Link to={'/vehicles'}>
        <NavBarItem>List of Vehicles</NavBarItem>
      </Link>
      <Link to={'/checkout'}>
      <NavBarItem>Shopping Cart</NavBarItem>
      </Link>
    </MenuBar>
  )
}

export default NavBar