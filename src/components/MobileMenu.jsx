import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const MenuWrapper = styled.div`
  position: absolute;
  top: 80px;
  right: 0;
  background: #333;
  width: 200px;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const StyledNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 15px;

  &.active {
    font-weight: bold;
    border-bottom: 1px solid #fff;
  }
`;

function MobileMenu({ setMenuOpen }) {
  const handleClick = () => {
    setMenuOpen(false);
  };

  return (
    <MenuWrapper>
      <StyledNavLink to="/" end onClick={handleClick}>홈</StyledNavLink>
      <StyledNavLink to="/about" onClick={handleClick}>회사소개</StyledNavLink>
      <StyledNavLink to="/freeboard" onClick={handleClick}>자유게시판</StyledNavLink>
    </MenuWrapper>
  );
}

export default MobileMenu;