import React from 'react'
import { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Importing the hamburger icon
import {HamburgerIcon,NavBarContainer,Head1,NavItem,NavLink,Nav,NavList} from "../../components/styles/NavBarStyle"

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <NavBarContainer>
      <Nav>
        <Head1>SongManagement</Head1>
        <HamburgerIcon onClick={toggleMenu}>
          <FaBars />
        </HamburgerIcon>
        <NavList isOpen={menuOpen}>
          <NavItem>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/add" onClick={() => setMenuOpen(false)}>Add Song</NavLink>
          </NavItem>
         
        </NavList>
      </Nav>
    </NavBarContainer>
  )
}

export default NavBar