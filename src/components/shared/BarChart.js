import React from 'react';
import { Line } from 'react-chartjs-2';
import { LOGGER } from '../../config';

const BarChart = props => {
  const { covidData } = props;
  LOGGER('data', covidData);
  let stateLabel = [];
  let activeCasePerState = [];
  for (let stateName of covidData.states) {
    stateLabel.push(stateName.state);
    activeCasePerState.push(stateName.casesOnAdmission);
  }
  LOGGER('state name', stateLabel);
  const d = {
    labels: stateLabel,
    datasets: [
      {
        label: 'Covid-19 Data',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: activeCasePerState,
      },
    ],
  };
  return (
    <div>
      {/*<Bar data={d} />*/}
      <Line data={d} />
    </div>
  );
};

export default BarChart;
