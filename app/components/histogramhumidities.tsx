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

const HistogramHumidity = ({ humidities }: { humidities: number[] }) => {
  // Filtra os valores de umidade para o intervalo de 30 a 80
  const filteredHumidities = humidities.filter(
    (humidity) => humidity >= 30 && humidity <= 80
  );

  const binSize = 10;
  const minPercentage = 30;
  const maxPercentage = 80;
  const numBins = Math.ceil((maxPercentage - minPercentage) / binSize);
  const bins = new Array(numBins).fill(0);

  filteredHumidities.forEach((humidity) => {
    const binIndex = Math.floor((humidity - minPercentage) / binSize);
    bins[binIndex] += 1;
  });

  const labels = bins.map((count, index) => {
    const minBin = minPercentage + index * binSize;
    const maxBin = minPercentage + (index + 1) * binSize;
    return `${minBin}% - ${maxBin}%`;
  });

  const chartData = {
    labels,
    datasets: [
      {
        label: "Histograma de Umidade",
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
        text: "Histograma de Umidade",
        font: {
          size: 20, 
        },
      },
    },
  };

  return (
    <div
      style={{ filter: "drop-shadow(0 1px 5px rgba(0, 0, 0, 0.3))" }}
      className="w-[600px] max-md:w-full mg:h-[330px] p-[15px] max-sm:p-[5px] flex flex-col items-center rounded-[8px] bg-[#F6F2E9]"
    >
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default HistogramHumidity;
