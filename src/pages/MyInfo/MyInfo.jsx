import { useState } from 'react';
import MyInfoEdit from './components/MyInfoEdit';
import MyInfoShow from './components/MyInfoShow';
import MyActivity from './components/MyActivity';
import './MyInfo.scss';

const MyInfo = () => {
  /** 페이지를 전환하는 useState를 정의합니다.  */
  const [editToggle, setEditToggle] = useState(false);

  /** 유저의 정보를 담은 useState를 정의합니다. */
  const [userInfo, setUserInfo] = useState({
    profileImage: '../../weather/images/TestImg/profile.png',
    nickname: 'WeatherAdmin',
    gender: 1,
    email: 'leecwee@gmail.com',
    cityId: 1,
  });
  console.log(userInfo);

  /** 수정페이지,마이페이지를 Toggle 하는 함수를 정의합니다. */
  const handleEditToggle = () => {
    setEditToggle(!editToggle);
  };

  return (
    <main className="MyInfo">
      <h2>Weather My Page</h2>

      {!editToggle ? (
        <MyInfoShow handleEditToggle={handleEditToggle} userInfo={userInfo} />
      ) : (
        <MyInfoEdit
          handleEditToggle={handleEditToggle}
          setUserInfo={setUserInfo}
          userInfo={userInfo}
        />
      )}

      {!editToggle ? <MyActivity /> : null}
    </main>
  );
};

export default MyInfo;
