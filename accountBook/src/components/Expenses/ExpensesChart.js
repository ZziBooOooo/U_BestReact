import React from "react";

import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  // 필터링한 데이터에서 반복문 수행
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
    // chartDataPoints의 value값을 데이터의 amout값으로 누적시킨다.
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  // Chart 컴포넌트 렌더링 + dataPoints로 value값 수정이 끝난 chartDataPoints를 넘긴다
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
