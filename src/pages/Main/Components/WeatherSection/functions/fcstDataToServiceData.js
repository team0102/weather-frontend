import { WEATHER_CODE } from '../../../../../data/OpenApiWeatherData/WeatherCodeData';

export const fcstDataToServiceData = (fcstData, date) => {
  const dateToFormat = date ? date : new Date();
  const formattedDate = `${dateToFormat.getFullYear()}${
    dateToFormat.getMonth() < 9 ? '0' : ''
  }${dateToFormat.getMonth() + 1}${
    dateToFormat.getDate() < 10 ? '0' : ''
  }${dateToFormat.getDate()}`;
  const time = `${
    dateToFormat.getHours() < 10 ? '0' : ''
  }${dateToFormat.getHours() + 1}00`;

  const dailyFcst = fcstData[formattedDate];
  const hourlyFcst = dailyFcst[time];

  const temperature = parseInt(hourlyFcst.TMP);
  const wind = parseInt(hourlyFcst.WSD);
  const { condition: weather, key: weatherKey } =
    WEATHER_CODE.SKY[hourlyFcst.SKY].PTY[hourlyFcst.PTY];
  const rain = parseInt(hourlyFcst.PCP);
  const rainPosibility = parseInt(hourlyFcst.POP);
  const snow = parseInt(hourlyFcst.SNO);
  const relativeHumidity = parseInt(hourlyFcst.REH);

  let feelsLike;
  // 체감온도 계산은 기상청 공개 자료 활용
  // https://data.kma.go.kr/climate/windChill/selectWindChillChart.do?pgmNo=111
  if (dateToFormat.getMonth() >= 4 && dateToFormat.getMonth() <= 8) {
    const tw =
      temperature *
        Math.atan(0.151977 * Math.pow(relativeHumidity + 8.313659, 0.5)) +
      Math.atan(temperature + relativeHumidity) -
      Math.atan(relativeHumidity - 1.67633) +
      0.00391838 *
        Math.pow(relativeHumidity, 3 / 2) *
        Math.atan(0.023101 * relativeHumidity) -
      4.686035;
    feelsLike =
      (-0.2442 + 0.55399 * tw + 0.45535 * temperature - 0.0022 * tw) ^
      (2 + 0.00278 * tw * temperature + 3.0);
  } else {
    feelsLike =
      wind > 1.3
        ? 13.12 +
          0.6215 * temperature -
          11.37 * Math.pow(wind / 3.6, 0.16) +
          0.3965 * Math.pow(wind / 3.6, 0.16) * temperature
        : temperature;
  }

  return {
    temperature,
    wind,
    weather,
    weatherKey,
    rain,
    rainPosibility,
    snow,
    feelsLike: Math.round(feelsLike),
    time: dateToFormat.getHours(),
  };
};
