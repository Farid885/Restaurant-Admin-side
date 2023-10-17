import React from "react";
import Chart from "react-apexcharts";

const Mychart = ({ data }) => {
  const options = {
    chart: {
      type: "donut",
    },
    labels: data.labels,
  };

  return (
    <div className="donutChartContainer">
      <Chart options={options} series={data.datasets[0].data} type="donut" />
      
    </div>
  );
};

export default Mychart;
