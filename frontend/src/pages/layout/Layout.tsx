import React from 'react'
import NavBar from '../../components/header/NavBar'
import Footer from '../../components/footer/Footer'
import { Outlet } from 'react-router-dom'
import {NavbarWrapper} from "../../components/styles/LayoutStyle"

const Layout = () => {
  return (
    <NavbarWrapper>
      <div className="all">
        <nav>
            <NavBar />
            </nav>
        
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </NavbarWrapper>
  );
};

export default Layout