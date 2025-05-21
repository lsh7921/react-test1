import React, { useEffect } from 'react';
import Chart from '../components/common/chart/Chart';

function Menu1() {
  useEffect(() => {
    document.title = "menu1 | MySite";
  }, []);

  return (
    <div>
      <h1>차트 테스트</h1>
      <Chart/>
    </div>
  );
}

export default Menu1;