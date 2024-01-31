import { useState } from 'react';
import IconButton from '../../components/IconButton/IconButton';
import Input from '../../components/Input/Input';
import './MyInfo.scss';

const MyInfo = () => {
  const [editToggle, setEditToggle] = useState(false);
  const [userInfo, setUserInfo] = useState({
    profileImg: '../../weather/images/TestImg/profile.png',
    name: '김날씨',
    nickname: 'WeatherAdmin',
    birthDate: '20240101',
    phoneNumber: '01012341234',
  });

  const { profileImg, name, nickname, birthDate, phoneNumber } = userInfo;

  const handleEditToggle = () => {
    setEditToggle(!editToggle);
  };

  const formatPhoneNumber = phoneNumber => {
    const numStr = phoneNumber;
    // 정규 표현식을 사용하여 포맷 변경
    return numStr.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
  };

  const formatBirthDate = birthDate => {
    const numStr = birthDate;
    // 정규 표현식을 사용하여 포맷 변경
    return numStr.replace(/(\d{4})(\d{2})(\d{2})/, '$1.$2.$3');
  };

  const saveEditInfo = event => {
    const { name, value } = event.target;
    // phoneNumber와 birthDate 필드에 대한 최대 길이 설정
    const maxLengths = {
      phoneNumber: 11,
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

      <section className="myInfoEditWrap">
        <div className="EditWrap">
          <h3>내정보수정</h3>

          {!editToggle ? (
            <IconButton content="Edit" size="lg" onClick={handleEditToggle} />
          ) : (
            <IconButton content="Check" size="lg" onClick={handleEditToggle} />
          )}
        </div>

        <div className="myInfoEditInner">
          <div className="profileImgInner">
            <img src={profileImg} alt="프로필 이미지" />
          </div>

          <div className="myInfoWrap">
            {!editToggle ? (
              <>
                <label>이름</label>
                <span>{name}</span>
              </>
            ) : (
              <Input
                type="text"
                label="이름"
                name="name"
                value={name}
                onChange={saveEditInfo}
              />
            )}
          </div>

          <div className="myInfoWrap">
            {!editToggle ? (
              <>
                <label>닉네임</label>
                <span>{nickname}</span>
              </>
            ) : (
              <Input
                type="text"
                label="닉네임"
                name="nickname"
                value={nickname}
                onChange={saveEditInfo}
              />
            )}
          </div>

          <div className="myInfoWrap">
            {!editToggle ? (
              <>
                <label>생년월일</label>
                <span>{formatBirthDate(birthDate)}</span>
              </>
            ) : (
              <Input
                type="text"
                label="생년월일"
                name="birthDate"
                value={birthDate}
                maxLength={8}
                onChange={saveEditInfo}
              />
            )}
          </div>

          <div className="myInfoWrap">
            {!editToggle ? (
              <>
                <label>핸드폰번호</label>
                <span>{formatPhoneNumber(phoneNumber)}</span>
              </>
            ) : (
              <Input
                type="text"
                label="핸드폰번호"
                name="phoneNumber"
                value={phoneNumber}
                maxLength={11}
                onChange={saveEditInfo}
              />
            )}
          </div>
        </div>
      </section>

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
