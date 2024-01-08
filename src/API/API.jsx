import axios from 'axios';

// Custom axios를 만들기 위해 함수 생성
const BASE_URL = '/weather/data/';

/**
 * Data를 받아오기 위한 Custom Axios
 * 1. export로 다른 페이지에서 불러와 사용할 수 있도록 함.
 * 2. axios.create로 새로운 axios를 만들어 사용함.
 * 3. baseURL을 미리 입력해두고, 사용하는 곳에서 Endpoint만 입력하여 사용함.
 * 4. localStorage에 저장된 token을 header에 넣어서 사용함. (추후 쿠키 사용 시 쿠키로 변경)
 */

export const customAxios = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    // Authorization: localStorage.getItem('accessToken'),
  },
});

// try,catch 문 예시 코드 입니다. 참고하세요.(참고용 수정해야할수도있습니다.)

// const Test = async category => {
//--------------------------------
// const params = TestData;
// .post(JOIN_POST, params)
// -------------------------------
// customAxios
//   try {
//     const response = await customAxios.get(`/테스트 api 입니다.json , [post라면 보내줄 params 데이터]);
//     setTestData(response.data.result);
//     console.log(response.data.result);
//   } catch (error) {
//     console.log(error);
//   }
// };
