import { IStatisticData } from "../models/statisticsData";

const StatisticData = ({
  statisticsData,
}: {
  statisticsData: IStatisticData;
}) => {
  return (
    <div
      style={{ filter: "drop-shadow(0 1px 5px rgba(0, 0, 0, 0.3))" }}
      className="min-w-[400px] max-xl:min-w-[320px] max-xl:w-[320px] max-md:w-full p-[15px] flex flex-col items-center rounded-[8px] bg-[#F6F2E9] mb-[10px]"
    >
      <h2 className="text-[20px] font-[600] text-[#666666]">
        Dados Estatísticos
      </h2>
      <div>
        <table className="border-[1px] border-[#B48A40]">
          <thead>
            <tr className="bg-[#B48A40] bg-opacity-70 border-y-[1px] border-y-[#B48A40]">
              <th></th>
              <th className="px-[10px] border-x-[1px] border-x-[#B48A40] text-[14px]">
                Temperatura
              </th>
              <th className="px-[10px] border-[1px] border-[#B48A40] text-[14px]">
                Umidade
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-[1px] border-[#B48A40]">
              <td className="px-[10px] border-r-[1px] border-r-[#B48A40] max-md:text-[14px]">
                Assimetria
              </td>
              <td className="border-r-[1px] border-r-[#B48A40] px-[10px]">
                {statisticsData.temperature.skewness}
              </td>
              <td className="px-[10px] border-[1px] border-[#B48A40]">
                {statisticsData.humidity.skewness}
              </td>
            </tr>
            <tr className="border-b-[1px] border-[#B48A40]">
              <td className="px-[10px] border-r-[1px] border-r-[#B48A40] max-md:text-[14px]">
                Desvio Padrão
              </td>
              <td className="border-r-[1px] border-r-[#B48A40] px-[10px]">
                {statisticsData.temperature.standardDeviation}
              </td>
              <td className="px-[10px] border-[1px] border-[#B48A40]">
                {statisticsData.humidity.standardDeviation}
              </td>
            </tr>
            <tr className="border-b-[1px] border-[#B48A40]">
              <td className="px-[10px] border-r-[1px] border-r-[#B48A40] max-md:text-[14px]">
                Média
              </td>
              <td className="border-r-[1px] border-r-[#B48A40] px-[10px]">
                {statisticsData.temperature.mean}
              </td>
              <td className="px-[10px] border-[1px] border-[#B48A40]">
                {statisticsData.humidity.mean}
              </td>
            </tr>
            <tr className="border-b-[1px] border-[#B48A40]">
              <td className="px-[10px] border-r-[1px] border-r-[#B48A40] max-md:text-[14px]">
                Mediana
              </td>
              <td className="border-r-[1px] border-r-[#B48A40] px-[10px]">
                {statisticsData.temperature.median}
              </td>
              <td className="px-[10px] border-[1px] border-[#B48A40]">
                {statisticsData.humidity.median}
              </td>
            </tr>
            <tr className="border-b-[1px] border-[#B48A40]">
              <td className="px-[10px] border-r-[1px] border-r-[#B48A40] max-md:text-[14px]">
                Moda
              </td>
              <td className="border-r-[1px] border-r-[#B48A40] px-[10px]">
                {statisticsData.temperature.mode}
              </td>
              <td className="px-[10px] border-[1px] border-[#B48A40]">
                {statisticsData.humidity.mode}
              </td>
            </tr>
            <tr>
              <td className="px-[10px] border-r-[1px] border-r-[#B48A40] max-md:text-[14px]">
                Previsão Futura
              </td>
              <td className="border-r-[1px] border-r-[#B48A40] px-[10px]">
                {statisticsData.temperature.futurePrediction}
              </td>
              <td className="px-[10px] border-[1px] border-[#B48A40]">
                {statisticsData.humidity.futurePrediction}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StatisticData;
