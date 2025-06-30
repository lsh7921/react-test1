import React, { useState, useEffect } from 'react';
import styles from './Chart.module.scss'; // CSS Module 방식으로 SCSS import

// Chart 컴포넌트 정의
const Chart = () => {
  // ✅ 상태(state) 선언
  const [monthlyFees, setMonthlyFees] = useState([]); // 요금 데이터 배열
  const [loading, setLoading] = useState(true);        // 로딩 상태
  const [error, setError] = useState(null);            // 에러 메시지 저장

  // ✅ 컴포넌트 마운트 시 데이터 fetch
  useEffect(() => {
    const fetchData = async () => {
      try {
        // public 폴더 기준 JSON 파일 경로
        //const response = await fetch('/fee.json');
        const response = await fetch(`${import.meta.env.BASE_URL}fee.json`);

        // HTTP 에러 상태 체크
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        // 응답을 JSON 형태로 파싱
        const data = await response.json();

        // JSON 구조 검증
        if (!Array.isArray(data.monthlyFees)) {
          throw new Error('Invalid data format: monthlyFees must be an array');
        }

        // 정상적인 경우 state 업데이트
        setMonthlyFees(data.monthlyFees);
      } catch (err) {
        // 에러 발생 시 에러 상태 저장
        setError(err.message);
      } finally {
        // 로딩 상태 종료 (성공/실패 관계없이 실행됨)
        setLoading(false);
      }
    };

    fetchData(); // 함수 호출
  }, []); // 빈 배열은 컴포넌트 최초 렌더링 시에만 실행됨

  // ✅ 로딩 중 화면
  if (loading) {
    return <div className={styles.loading}>데이터를 불러오는 중...</div>;
  }

  // ✅ 에러 발생 시 화면
  if (error) {
    return <div className={styles.error}>데이터를 불러오는 중 오류 발생: {error}</div>;
  }

  // ✅ 데이터 없음 처리
  if (!monthlyFees || monthlyFees.length === 0) {
    return <div className={styles.noData}>표시할 데이터가 없습니다.</div>;
  }

  // ✅ 최대값 계산 (그래프 막대 비율을 위해)
  const maxFee = Math.max(...monthlyFees.map(item => item.fee));

  return (
    <div className={styles.container}>
      {/* 제목 */}
      <h1 className={styles.title}>월별 통신요금 비교 (1월~6월)</h1>

      {/* 막대 그래프 본체 */}
      <div className={styles.chart}>
        {monthlyFees.map((item, index) => {
          // 막대 높이를 비율로 계산 (100% 기준)
          const barHeight = (item.fee / maxFee) * 100;

          return (
            <div key={index} className={styles.barContainer}>
              <div 
                className={styles.bar} 
                style={{ height: `${barHeight}%` }}         // 동적 높이 설정
                data-fee={`${item.fee.toLocaleString()}원`} // 툴팁 표시용 커스텀 속성
                title={`${item.month}: ${item.fee.toLocaleString()}원`} // 기본 툴팁
                aria-label={`${item.month} 요금: ${item.fee.toLocaleString()}원`} // 접근성용
              />
              <div className={styles.monthLabel}>{item.month}</div> {/* 월 표시 */}
            </div>
          );
        })}
      </div>

      {/* 범례 */}
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