import React, { useEffect } from 'react';

function Menu1() {
  useEffect(() => {
    document.title = "menu1 | MySite";
  }, []);

  return (
    <div>
      <h1>menu1</h1>
    </div>
  );
}

export default Menu1;