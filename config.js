//예시 백엔드 앤드포인트 URL을 관리하는 config 파일입니다.
const BASE_URL = 'http://3.39.35.26:3000/';

// const PUBLIC_DATA_URL = '../../data';

export const API = {
  SIGNUP: `${BASE_URL}/[앤드포인트]`,
  POPULAR_SEARCHES: `PopularSearchesData.json`,
  KEYWORDS: `SearchPageData.json`,
  USER_LOCATIONS: `UserLocationData.json`,
  LOGIN: `auth/kakao/callback`,
  FEED_DATA: `/FeedData.json`,
  BOOK_MARK_LIST: `BookMarkListData.json`,
  FEEDS: `feeds`,
  CLOTHES: `clothes`,
  WEATHER: `getVilageFcst`,
  CHAT: `ChatData.json`,
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
