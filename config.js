//예시 백엔드 앤드포인트 URL을 관리하는 config 파일입니다.
const BASE_URL = 'http://10.58.52.159:8000';

const PUBLIC_DATA_URL = '../../data';

export const API = {
  SIGNUP: `${BASE_URL}/[앤드포인트]`,
  POPULAR_SEARCHES: `${PUBLIC_DATA_URL}/PopularSearchesData.json`,
  KEYWORDS: `${PUBLIC_DATA_URL}/SearchPageData.json`,
  USER_LOCATIONS: `UserLocationData.json`,
  FEED_DATA: `/FeedData.json`,
  BOOK_MARK_LIST: `${PUBLIC_DATA_URL}/BookMarkListData.json`,
  FEEDS: `FeedsData.json`,
  CLOTHES: `ClothesData.json`,
  WEATHER: `getVilageFcst`,
};

/**
 * 포트번호를 바꿔줘야하는 단점
 * 
const BASE_URL = 'http://10.58.52.159:8000';

const PUBLIC_DATA_URL = 'http://localhost:5173/weather/data';

export const API = {
  SIGNUP: `${BASE_URL}/[앤드포인트]`,
  POPULAR_SEARCHES: `${PUBLIC_DATA_URL}/PopularSearchesData.json`,
  KEYWORDS: `${PUBLIC_DATA_URL}/SearchPageData.json`,
  USER_LOCATIONS: `${PUBLIC_DATA_URL}/UserLocationData.json`,
  BOOK_MARK_LIST: `${PUBLIC_DATA_URL}/BookMarkListData.json`,
  FEEDS: `${PUBLIC_DATA_URL}/FeedsData.json`,
};

 */
