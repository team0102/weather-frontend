/**
 * 테스트용 api 입니다.
 * 1.인자로 status 값을 받습니다.
 * 2.status 인자값이 200 이라면  resolve 를 반환합니다.
 * 3.그외의 값은 reject 로 반환합니다. 예시 => 400 401 402
 * 4.테스트 하고자하는 파일에서 예를들어 testAxios(200)인자로 200을 넣으면
 *   200에관련된 실행은 확인할수있습니다. 200 이외값은 reject에 담겨 반홥됩니다.
 * ---------------------------------------------------------------------
 * 설명
 * Promise 객체는 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과 값을 나타냅니다. // 성공에 대한 처리를 합니다.
 * resolve는 성공에 대한 값이고 reject 실패했을때에 대한 값을 반환합니다. // 에러에 대한 처리를 합니다.
 */
export const basic_test = status => {
  const token = 'token:가상의 토큰값을 줍니다.';
  return new Promise((resolve, reject) => {
    if (status === 200) {
      resolve({
        status,
        token,
      });
    } else {
      reject({
        status,
      });
    }
  });
};
