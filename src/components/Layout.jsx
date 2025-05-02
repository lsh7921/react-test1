import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f9f9f9; /* 기본 배경색 추가 */
`;

const Content = styled.main`
  flex: 1;
  padding: 1.5rem;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
`;

function Layout() {
  return (
    <Container>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </Container>
  );
}

export default Layout;
