import React, { useEffect , useState} from 'react';
import styles from'../style/menu2.module.scss';

function Menu3() {
  useEffect(() => {
    document.title = "menu3 | MySite";
  }, []);

  return (
    <div>
      <h1>menu3 </h1>
      <section>
      </section>
    </div>
  );
}

export default Menu3;