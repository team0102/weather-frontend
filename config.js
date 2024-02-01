//예시 백엔드 앤드포인트 URL을 관리하는 config 파일입니다.
const BASE_URL = 'http://10.58.52.159:8000';
export const API = {
  SIGNUP: `${BASE_URL}/[앤드포인트]`,
  POPULAR_SEARCHES: `/PopularSearchesData.json`,
  KEYWORDS: `/SearchPageData.json`,
  USER_LOCATIONS: `UserLocationData.json`,
  FEEDS: `FeedsData.json`,
};
