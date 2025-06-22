import React, { useEffect } from 'react';

function Menu2() {
  useEffect(() => {
    document.title = "menu2 | MySite";
  }, []);

  return (
    <div>
      <h1>menu2 </h1>
    </div>
  );
}

export default Menu2;