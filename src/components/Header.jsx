import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background:#333;
  padding:20px;
  color:#fff;
`;

const Nav = styled.nav`
  display:flex;
  gap:20px;
`;

const StyledLink = styled(Link)`
  color:#fff;
  text-decoration:none;
  &:hover{
    text-decoration:underline;
  }
`;

function Header(){
  return(
    <HeaderWrapper>
      <Nav>
        <StyledLink to="/">홈</StyledLink>
        <StyledLink to="/about">회사소개</StyledLink>
        <StyledLink to="/freeboard">자유게시판</StyledLink>
      </Nav>
    </HeaderWrapper>
  )
}

export default Header;