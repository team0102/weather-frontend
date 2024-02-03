import { useState } from 'react';
import IconButton from '../../components/IconButton/IconButton';
import MyInfoEdit from './components/MyInfoEdit/MyInfoEdit';
import MyInfoShow from './components/MyInfoShow/MyInfoShow';
import './MyInfo.scss';

const MyInfo = () => {
  const [editToggle, setEditToggle] = useState(false);
  const [userInfo, setUserInfo] = useState({
    profileImg: '../../weather/images/TestImg/profile.png',
    name: '김날씨',
    nickname: 'WeatherAdmin',
    birthDate: '20240101',
    email: '01012341234',
  });

  const handleEditToggle = () => {
    setEditToggle(!editToggle);
  };

  const formatBirthDate = birthDate => {
    const numStr = birthDate;
    // 정규 표현식을 사용하여 포맷 변경
    return numStr.replace(/(\d{4})(\d{2})(\d{2})/, '$1.$2.$3');
  };

  const saveEditInfo = event => {
    const { name, value } = event.target;
    // birthDate 필드에 대한 최대 길이 설정
    const maxLengths = {
      birthDate: 8,
    };
    // 숫자 필드일 경우 처리
    if (name in maxLengths) {
      const onlyNumberValue = value.replace(/[^\d]/g, ''); // 숫자가 아닌 문자 제거
      if (onlyNumberValue.length <= maxLengths[name]) {
        setUserInfo({ ...userInfo, [name]: onlyNumberValue });
      }
    } else {
      // 다른 필드 처리
      setUserInfo({ ...userInfo, [name]: value });
    }
  };

  return (
    <main className="MyInfo">
      <h2>Weather My Page</h2>

      {!editToggle ? (
        <MyInfoShow
          handleEditToggle={handleEditToggle}
          editToggle={editToggle}
          setEditToggle={setEditToggle}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
        />
      ) : (
        <MyInfoEdit
          handleEditToggle={handleEditToggle}
          editToggle={editToggle}
          setEditToggle={setEditToggle}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          saveEditInfo={saveEditInfo}
        />
      )}

      <section className="myActivityWrap">
        <h3>내 활동</h3>

        <ul className="activityWrap">
          <li className="activityItemInner">
            <div className="activityItem">
              <IconButton content="CommentRound" size="lg"></IconButton>
              <label>댓글수</label>
            </div>

            <span>30개</span>
          </li>

          <li className="activityItemInner">
            <div className="activityItem">
              <IconButton content="Bookmark" size="lg"></IconButton>
              <label>게시물수</label>
            </div>

            <span>18개</span>
          </li>

          <li className="activityItemInner">
            <div className="activityItem">
              <IconButton content="Follower" size="lg"></IconButton>
              <label>팔로워수</label>
            </div>

            <span>200명</span>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default MyInfo;
