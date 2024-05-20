
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = ({data}) => {
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false, // Set to true if you want to maintain the aspect ratio
      };
  return (
    <div className="chart">
        <Doughnut data={data} options={chartOptions} />
    </div>
  )
}

export default DoughnutChart