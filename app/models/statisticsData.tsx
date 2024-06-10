export interface IStatisticData {
  humidity: {
    skewness: number;
    standardDeviation: number;
    mean: number;
    median: number;
    mode: number;
    futurePrediction: number;
  };
  temperature: {
    skewness: number;
    standardDeviation: number;
    mean: number;
    median: number;
    mode: number;
    futurePrediction: number;
  };
}
