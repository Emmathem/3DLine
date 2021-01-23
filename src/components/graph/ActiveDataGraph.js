import React from 'react';
import { Line } from 'react-chartjs-2';
import { LOGGER } from '../../config';

const ActiveDataGraph = props => {
  const { stateData } = props || [];
  const finalStateData = stateData !== undefined ? stateData : [];
  let stateLabel = [];
  let activeCasePerState = [];
  for (let stateName of finalStateData) {
    stateLabel.push(stateName.state);
    activeCasePerState.push(stateName.casesOnAdmission);
  }
  LOGGER('state name', stateLabel);
  const dataObject = {
    labels: stateLabel,
    datasets: [
      {
        label: 'Active Cases',
        fill: true,
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
      <Line data={dataObject} />
    </div>
  );
};

export default ActiveDataGraph;
