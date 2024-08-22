import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
export const NavBarContainer = styled.div`
  background-color: #222;
  padding: 10px 40px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Head1 = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 28px;
  font-weight: 700;
  color: #03dac6;
  margin: 0;
  padding-left: 20px;
`;

export const HamburgerIcon = styled.div`
  display: none;
  font-size: 28px;
  color: #fff;
  cursor: pointer;
  padding-right: 30px;

  @media (max-width: 768px) {
    display: block;
  }
`;
interface NavListProps {
  isOpen: boolean;
}

export const NavList = styled.ul<NavListProps>`
  display: flex;
  list-style: none;
  margin: 0;
  padding-right: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    background-color: #222;
    width: 100%;
    position: absolute;
    top: 60px;
    left: ${({ isOpen }) => (isOpen ? '0' : '-220%')}; 
    transition: left 0.3s ease;
  }
`;

export const NavItem = styled.li`
  margin-left: 30px;

  &:first-of-type {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
    width: 100%;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #03dac6;
    color: #222;
  }

  @media (max-width: 768px) {
    padding: 10px;
    width: 100%;
    display: block;
  }
`;
