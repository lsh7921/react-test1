import React, { useState, useEffect } from 'react';
import styles from'./Chart.module.scss';

const Chart = () => {
  const [monthlyFees, setMonthlyFees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./fee.json');//json 경로
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMonthlyFees(data.monthlyFees);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className={styles.loading}>데이터를 불러오는 중...</div>;
  }

  if (error) {
    return <div className={styles.error}>데이터를 불러오는 중 오류 발생: {error}</div>;
  }

  if (!monthlyFees || monthlyFees.length === 0) {
    return <div className={styles.noData}>표시할 데이터가 없습니다.</div>;
  }

  // 최대 요금 계산
  const maxFee = Math.max(...monthlyFees.map(item => item.fee));

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>월별 통신요금 비교 (1월~6월)</h1>
      <div className={styles.chart}>
        {monthlyFees.map((item, index) => {
          const barHeight = (item.fee / maxFee) * 100;
          return (
            <div key={index} className={styles.barContainer}>
              <div 
                className={styles.bar} 
                style={{ height: `${barHeight}%` }}
                data-fee={`${item.fee.toLocaleString()}원`}
              />
              <div className={styles.monthLabel}>{item.month}</div>
            </div>
          );
        })}
      </div>
      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <span 
            className={styles.legendColor} 
            style={{ backgroundColor: '#4e79a7' }} 
          />
          <span className={styles.legendText}>통신요금(원)</span>
        </div>
      </div>
    </div>
  );
};

export default Chart;