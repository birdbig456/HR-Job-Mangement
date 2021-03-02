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
		'#36a69a',
		'#fec566',
		
		],
		hoverBackgroundColor: [
		'#36a69a',
		'#fec566',
		
		]
	}]
};

export default class PieChart extends React.Component{
  

  render() {
    return (
      <div style={{padding:10}}>
        <Pie data={data} />
      </div>
    );
  }
};