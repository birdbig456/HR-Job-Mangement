import React from 'react';
import {Pie} from 'react-chartjs-2';

const data = {
	labels: [
		'Critical Task',
		'Task',
		
	],
	datasets: [{
		data: [80,200],
		backgroundColor: [
		'#bae1de',
		'#e0e0e0',
		
		],
		hoverBackgroundColor: [
		'#bae1de',
		'#e0e0e0',
		
		]
	}]
};

export default class PieChart extends React.Component{
  

  render() {
    return (
      <div style={{padding:50}}>
        <Pie data={data} />
      </div>
    );
  }
};