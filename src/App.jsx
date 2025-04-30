import React from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Freeboard from './pages/Freeboard';
import styled from 'styled-components';
import './App.scss'

const Container = styled.div`
  display:flex;
  flex-direction:column;
  min-height:100vh;
`;

const Content = styled.main`
  flex:1;
  padding:20px;
`;

function App(){
  return(
    <Container>
      <Header />
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/freeboard" element={<Freeboard />} />
        </Routes>
    </Content>
      <Footer />
    </Container>
  )
}

export default App;