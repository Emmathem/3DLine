import React from 'react';
import { Line } from 'react-chartjs-2';
import { LOGGER } from '../../config';

const DischargedDataGraph = props => {
  const { stateData } = props || [];
  const finalStateData = stateData !== undefined ? stateData : [];
  LOGGER('props', props);
  let stateLabel = [];
  let dischargedCases = [];
  for (let stateName of finalStateData) {
    stateLabel.push(stateName.state);
    dischargedCases.push(stateName.discharged);
  }
  const dataObject = {
    labels: stateLabel,
    datasets: [
      {
        label: 'Discharged Cases',
        fill: true,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: dischargedCases,
      },
    ],
  };
  return finalStateData.length <= 0 ? (
    <div>Details not available</div>
  ) : (
    <div>
      <Line data={dataObject} />
    </div>
  );
};

export default DischargedDataGraph;
