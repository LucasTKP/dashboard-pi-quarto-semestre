import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const HistogramTemperature = ({ temperatures }: { temperatures: number[] }) => {
  // Filtra os valores de temperatura para o intervalo de 23 a 33
  const filteredTemperatures = temperatures.filter(
    (temp) => temp >= 23 && temp <= 33
  );

  const binSize = 1;
  const minTemperature = 23;
  const maxTemperature = 33;
  const numBins = Math.ceil((maxTemperature - minTemperature) / binSize);
  const bins = new Array(numBins).fill(0);

  filteredTemperatures.forEach((temp) => {
    const binIndex = Math.floor((temp - minTemperature) / binSize);
    bins[binIndex] += 1;
  });

  const totalValues = filteredTemperatures.length;
  const labels = bins.map((count, index) => {
    const temperature = minTemperature + index * binSize;
    return `${temperature}°C`;
  });

  const chartData = {
    labels,
    datasets: [
      {
        label: "Histograma de Temperatura",
        data: bins,
        backgroundColor: "rgba(180, 138, 64, 0.6)",
        borderColor: "rgba(180, 138, 64, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Histograma de Temperatura",
        font: {
          size: 20,
        },
      },
    },
  };

  return (
    <div
      style={{ filter: "drop-shadow(0 1px 5px rgba(0, 0, 0, 0.3))" }}
      className="w-[600px] max-md:w-full lg:h-[330px] p-[15px] max-sm:p-[5px] flex flex-col items-center rounded-[8px] bg-[#F6F2E9]"
    >
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default HistogramTemperature;
