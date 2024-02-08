import { WEATHER_CODE } from '../../../../../data/OpenApiWeatherData/WeatherCodeData';

/**
 *
 * @param {Object} fcstData                         - 예보 정보가 담긴 object
 * @param {Date} date
 * @returns
 * -------------------------------------------------------------------------
 * fcstData 예시
 * 1계층 : 예보 일자를 key로 하는 object
 * 2계층 : 예보 시각을 key로 하는 object
 * 3계층 : 예보 항목별 데이터를 담은 object
 *  {
 *    "20240208":                                   - 예보 일자
 *      {
 *        "0200":                                   - 예보 시각
 *          {
 *            TMP: "-2",                            - 해당 예보에 포함된 날씨 데이터
 *            POP: "60",
 *            ...
 *          },
 *        "0500":
 *          {...},
 *      },
 *    "20240209":
 *      {...}
 *  }
 * -------------------------------------------------------------------------
 * 예보 데이터 key 분류: https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15084084
 * 항목값       항목명                 단위
 * POP        강수확률                 %
 * PTY        강수형태               코드값
 * PCP        1시간 강수량          범주 (1 mm)
 * REH        습도                    %
 * SNO        1시간 신적설          범주(1 cm)
 * SKY        하늘상태               코드값
 * TMP        1시간 기온              ℃
 * TMN        일 최저기온              ℃
 * TMX        일 최고기온              ℃
 * UUU        풍속(동서성분)           m/s
 * VVV        풍속(남북성분)           m/s
 * WAV        파고                    M
 * VEC        풍향                   deg
 * WSD        풍속                   m/s
 */
export const fcstDataToServiceData = (fcstData, date) => {
  const dateToFormat = date ? date : new Date();
  const formattedDate = `${dateToFormat.getFullYear()}${
    dateToFormat.getMonth() < 9 ? '0' : ''
  }${dateToFormat.getMonth() + 1}${
    dateToFormat.getDate() < 10 ? '0' : ''
  }${dateToFormat.getDate()}`;
  const time = `${dateToFormat.getHours() < 10 ? '0' : ''}${
    dateToFormat.getHours() + 1
  }00`;

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

  // const dailyTemperatures = Object.entries(dailyFcst).map(item => parseInt(item.TMP)).filter((a,b) => a > b);
  // const maxTemperature = dailyTemperatures[0];
  // const minTemperature = dailyTemperatures.pop();
  let maxTemperature;
  let minTemperature;
  Object.values(dailyFcst).forEach(item => {
    if (Object.keys(item).includes('TMN')) minTemperature = parseInt(item.TMN);
    if (Object.keys(item).includes('TMX')) maxTemperature = parseInt(item.TMX);
  });

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
    maxTemperature,
    minTemperature,
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
