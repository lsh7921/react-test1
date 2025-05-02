import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background:#eee;
  padding:20px;
  text-align:center;
`;

function Footer(){
  return(
    <FooterWrapper>
      © 2025 react website. All rights reserved.
    </FooterWrapper>
  )
}

export default Footer;