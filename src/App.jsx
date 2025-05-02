import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Menu1 from './pages/Menu1';
import Menu2 from './pages/Menu2';
import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* 전역 스타일을 설정 */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: sans-serif;
    background-color: #fff;
    color: #000;
    line-height: 1.5;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    all: unset;
    cursor: pointer;
  }
  .logo{display:inline-block;align-content:bottom;width:16px;height:16px;}
`;

function App() {  
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="menu1" element={<Menu1 />} />
            <Route path="menu2" element={<Menu2 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;