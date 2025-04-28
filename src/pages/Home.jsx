import React from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '../../public/vite.svg';

function Home(){
  return(
    <>
      <h1>홈 페이지</h1>
      <a href="{()=>false}">
        <img src={viteLogo} className="logo" alt="vite logo" />
      </a>
      <a href="{()=>false}">
        <img src={reactLogo} className="logo react" alt="react logo" />
      </a>
    </>
  )
}

export default Home;