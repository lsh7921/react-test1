import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import MobileMenu from './MobileMenu';
import viteLogo from '/vite.svg';

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  background: #333;
  color: #fff;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  z-index:2;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;

  &.active {
    font-weight: bold;
    border-bottom: 2px solid #fff;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderWrapper>
      <div><img src={viteLogo} className="logo" alt="vite logo" /> Logo</div>
      <Nav>
        <StyledNavLink to="/" end>홈</StyledNavLink>
        <StyledNavLink to="/menu1">menu1</StyledNavLink>
        <StyledNavLink to="/menu2">menu2</StyledNavLink>
      </Nav>
      <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? '닫기' : '메뉴'}
      </Hamburger>
      {menuOpen && <MobileMenu setMenuOpen={setMenuOpen} />}
    </HeaderWrapper>
  );
}

export default Header;