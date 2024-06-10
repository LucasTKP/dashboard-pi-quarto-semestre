"use client";

import HistogramHumidity from "./components/histogramhumidities";
import PieChart from "./components/pieChart";
import { useEffect, useState } from "react";
import Image from "next/image";
import HistogramTemperature from "./components/histogramTemperature";
import { IStatisticData } from "./models/statisticsData";
import StatisticData from "./components/statisticData";

export default function Home() {
  const [trueCount, setTrueCount] = useState(0);
  const [falseCount, setFalseCount] = useState(0);
  const [humidities, setHumidities] = useState<number[]>([]);
  const [temperatures, setTemperatures] = useState<number[]>([]);
  const [statisticsData, setStatisticsData] = useState<IStatisticData>();

  useEffect(() => {
    getDatas();
    getStatisticsData();
  }, []);

  async function getDatas() {
    const temperaturas = [];
    const umidade = [];
    let trueCount = 0;
    let falseCount = 0;

    try {
      const response = await fetch("https://teste-q43i.onrender.com/analise", {
        cache: "force-cache",
      });
      const result = await response.json();
      for (let i = 0; i < result.length; i++) {
        temperaturas.push(result[i].temperatura);
        umidade.push(result[i].umidade);
        if (result[i].choveu) {
          trueCount = trueCount + 1;
        } else {
          falseCount = falseCount + 1;
        }
      }
      setTrueCount(trueCount);
      setFalseCount(falseCount);
      setHumidities(umidade);
      setTemperatures(temperaturas);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
    }
  }

  async function getStatisticsData() {
    try {
      const response = await fetch(
        "https://teste-q43i.onrender.com/dashboard?dataInicial=01/03/2024&dataFinal=9/06/2024",
        { cache: "force-cache" }
      );
      const result = await response.json();
      const formattedData: IStatisticData = {
        temperature: {
          skewness: parseFloat(result.temperatura.assimetria),
          standardDeviation: parseFloat(result.temperatura.desvioPadrao),
          mean: parseFloat(result.temperatura.media),
          median: parseFloat(result.temperatura.mediana),
          mode: parseFloat(result.temperatura.moda),
          futurePrediction: parseFloat(result.temperatura.previsaoFutura),
        },
        humidity: {
          skewness: parseFloat(result.umidade.assimetria),
          standardDeviation: parseFloat(result.umidade.desvioPadrao),
          mean: parseFloat(result.umidade.media),
          median: parseFloat(result.umidade.mediana),
          mode: parseFloat(result.umidade.moda),
          futurePrediction: parseFloat(result.umidade.previsaoFutura),
        },
      };
      setStatisticsData(formattedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
    }
  }

  return (
    <main className="bg-[#F6F2E9] w-full h-full min-h-screen flex flex-col px-[10%]">
      <Image
        src={"/logo.png"}
        width={200}
        height={200}
        alt="logo"
        className="self-center mt-[10px]"
      />
      <h1 className="self-center font-[600] text-[40px]">DashBoard</h1>
      <button onClick={() => getDatas()}>TESTE</button>
      <div className="flex items-start justify-between">
        {trueCount > 0 && falseCount > 0 && (
          <PieChart trueCount={trueCount} falseCount={falseCount} />
        )}
        {humidities.length > 0 && <HistogramHumidity humidities={humidities} />}
      </div>

      <div className="flex items-start justify-between mt-[30px]">
        {statisticsData && <StatisticData statisticsData={statisticsData} />}
        {temperatures.length > 0 && (
          <HistogramTemperature temperatures={temperatures} />
        )}
      </div>
    </main>
  );
}
