
/**
 * getBaseDateAndTime params
 * Date object로부터 기상청 단기예보에 활용할 발표일자와 발표시간을 계산하여 반환한다
 * @param {Date} date                - (Optional) 기상청 단기예보에 맞는 발표일자와 발표시간으로 변환 할 Date object. 미입력시 현재 시각으로 계산 
 * @returns 
 */

// TODO: 날짜 라이브러리 적용 (Moment.js, Day.js 등)
export const getBaseDateAndTime = (date) => {
  const dateOfRequest = date ? date : new Date();
  const year = dateOfRequest.getFullYear();
  const month =
    dateOfRequest.getMonth() < 9 ? `0${dateOfRequest.getMonth() + 1}` : dateOfRequest.getMonth() + 1;
  const formattedDate = dateOfRequest.getDate() < 10 ? `0${dateOfRequest.getDate()}` : dateOfRequest.getDate();

  const currentMinute = dateOfRequest.getMinutes();
  const currentHour = dateOfRequest.getHours();
  let baseTime;
  let baseDate;
  if (currentHour < 2 || (currentMinute <= 10 && currentHour === 2)) {
    // 해당날짜 첫 발표 이전인 경우 (02:10 이전) 전날 마지막 발표시간을 이용
    console.log(1)
    baseTime = '2300';
    baseDate = `${year}${month}${
      formattedDate < 11 ? `0${dateOfRequest.getDate() - 1}` : dateOfRequest.getDate() - 1
    }`;
  } else if (currentMinute <= 10 && currentHour % 3 === 2) {
    console.log(2)
    // basetime 발표시간 직전 10분 이내인 경우 직전 발표시간을 사용
    baseTime =
    currentHour < 12 ? `0${currentHour - 3}00` : `${currentHour - 3}00`;
    baseDate = `${year}${month}${formattedDate}`;
  } else {
    console.log(3)
    // 그 외의 경우 가장 최근의 발표시간을 사용
    baseTime =
      currentHour < 11
        ? `0${currentHour - ((currentHour + 1) % 3)}00`
        : `${currentHour - ((currentHour + 1) % 3)}00`;
    baseDate = `${year}${month}${formattedDate}`;
  }
  console.log(baseTime, baseDate)
  return { baseDate, baseTime };
};
