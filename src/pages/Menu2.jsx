import React, { useEffect , useState} from 'react';
import styles from'../style/menu2.module.scss';
import Button, { ButtonGroup } from "../components/Button";

function Menu2() {
  let count = 0;
  const [count2, setCount2] = useState(0);
  const increase = () =>{
    count = count + 1;
    setCount2(count2 + 1);
    console.log(`increase 내부 count: ${count}, count2: ${count2}, setCount2: ${setCount2}`);
  }
  console.log(`increase 외부 count: ${count}, count2: ${count2}, setCount2: ${setCount2}`);

  useEffect(() => {
    document.title = "menu2 | MySite";
  }, []);

  return (
    <div>
      <h1>menu2 </h1>
      <section>
        <h2>- count</h2>
        <div>state:{count2}</div>
        <button className={`${styles.btnCalc} ${styles.icoPlus}`} onClick={increase}>증가</button>
        <div>      
          <Button size="SM" variant="primary" iconType="plus" onClick={increase}>증가</Button>
        </div>  
      </section>
    </div>
  );
}

export default Menu2;