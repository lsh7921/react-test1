import React, { useEffect } from 'react';

function About() {
  useEffect(() => {
    document.title = "회사소개 | MySite";
  }, []);

  return (
    <div>
      <h1>회사소개</h1>
    </div>
  );
}

export default About;