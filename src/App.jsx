import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Freeboard from './pages/Freeboard';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

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
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="freeboard" element={<Freeboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;