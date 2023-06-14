import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  // console.log(props); {dataPonits : Array(12)}
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  // console.log(dataPointValues); Array(12) - 배열만 뽑아오기 위함
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
