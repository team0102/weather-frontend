export const WEATHER_CODE = {
  SKY: {
    1: {
      condition: "맑음",
      PTY: {
        "0": {
          condition: "맑음",
          key: "Sun",
        },
        "1": {
          condition: "비",
          key: "Rain",
        },
        "2": {
          condition: "비/눈",
          key: "Sleet",
        },
        "3": {
          condition: "눈",
          key: "Snow",
        },
        "4": {
          condition: "소나기",
          key: "LightRainSun",
        },
      },
    },
    3: {
      condition: "구름많음",
      PTY: {
        "0": {
          condition: "구름많음",
          key: "PartlyCloud",
        },
        "1": {
          condition: "비",
          key: "LightRainSun",
        },
        "2": {
          condition: "비/눈",
          key: "SleetSun",
        },
        "3": {
          condition: "눈",
          key: "SnowSun",
        },
        "4": {
          condition: "소나기",
          key: "LightRainSun",
        },
      },
    },
    4: {
      condition: "흐림",
      PTY: {
        "0": {
          condition: "흐림",
          key: "Cloud",
        },
        "1": {
          condition: "비",
          key: "LightRain",
        },
        "2": {
          condition: "비/눈",
          key: "Sleet",
        },
        "3": {
          condition: "눈",
          key: "Snow",
        },
        "4": {
          condition: "소나기",
          key: "LightRain",
        },
      },
    },
  },
};
