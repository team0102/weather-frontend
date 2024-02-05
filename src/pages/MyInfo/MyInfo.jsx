import { useState } from 'react';
import MyInfoEdit from './components/MyInfoEdit';
import MyInfoShow from './components/MyInfoShow';
import MyActivity from './components/MyActivity';
import './MyInfo.scss';

const MyInfo = () => {
  const [editToggle, setEditToggle] = useState(false);
  const [userInfo, setUserInfo] = useState({
    profileImg: '../../weather/images/TestImg/profile.png',
    name: '김날씨',
    nickname: 'WeatherAdmin',
    birthDate: '20240101',
    email: 'leecwee',
    emailAddress: 'gmail.com',
  });
  console.log(userInfo.profileImg);
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

      <MyActivity />
    </main>
  );
};

export default MyInfo;
