import React from 'react';
import { Line } from 'react-chartjs-2';
import { LOGGER } from '../../config';

const ConfirmDataGraph = props => {
  const { stateData } = props;
  LOGGER('props', props);
  let stateLabel = [];
  let confirmedCases = [];
  for (let stateName of stateData) {
    stateLabel.push(stateName.state);
    confirmedCases.push(stateName.confirmedCases);
  }
  const dataObject = {
    labels: stateLabel,
    datasets: [
      {
        label: 'Confirmed Cases',
        fill: true,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: confirmedCases,
      },
    ],
  };
  return (
    <div>
      <Line data={dataObject} />
    </div>
  );
};

export default ConfirmDataGraph;