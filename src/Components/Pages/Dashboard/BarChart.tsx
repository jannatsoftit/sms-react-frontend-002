// import Chart from 'chart.js/auto';
// import { Line } from 'react-chartjs-2';
import { Chart as chartjs, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2'
chartjs.register(...registerables);


const labels = ['2018', '2019', '2020', '2021', '2022', '2023'];

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Average Students',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [160, 210, 150, 190, 230, 245],
    },
  ],
};

const BarChart = () => {
  return (
    <div className='bg-white border border-secondary'>
      <Line data={data}/>
    </div>
  )
}

export default BarChart;
