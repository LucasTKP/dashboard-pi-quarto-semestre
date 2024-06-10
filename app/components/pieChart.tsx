import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  trueCount: number;
  falseCount: number;
}

const PieChart = ({ trueCount, falseCount }: PieChartProps) => {
  const chartData = {
    labels: ["Choveu", "Não Choveu"],
    datasets: [
      {
        data: [trueCount, falseCount],
        backgroundColor: ["#4F8E04", "#B48A40"],
        hoverBackgroundColor: ["#4F8E04", "#B48A40"],
        borderColor: "#262626",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div
      style={{ filter: "drop-shadow(0 1px 5px rgba(0, 0, 0, 0.3))" }}
      className="w-[400px] p-[15px] flex flex-col items-center rounded-[8px] bg-[#F6F2E9]"
    >
      <h2 className="text-[20px] font-[600] text-[#666666]">
        Dados das Chuvas
      </h2>
      <div className="w-[270px]">
        <Pie data={chartData} />
      </div>
    </div>
  );
};

export default PieChart;
