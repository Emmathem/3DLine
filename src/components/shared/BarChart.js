import React from 'react';
import { Bar, Line } from 'react-chartjs-2';

const BarChart = () => {
  const d = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Rainfall',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56],
      },
    ],
  };
  return (
    <div>
      <Bar data={d} />
      <Line data={d} />
    </div>
  );
};

export default BarChart;
