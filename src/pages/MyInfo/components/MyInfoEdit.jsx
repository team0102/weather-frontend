import { useState } from 'react';
import IconButton from '../../../components/IconButton/IconButton';
import Input from '../../../components/Input/Input';
import CustomSelectBox from '../customSelectBox/customSelectBox';
import { EMAIL_DATA } from '../../../data/EmailAddressData/EmailAddressData';

/**
 * MyInfoEdit props list
 *@property {function} handleEditToggle                  - 수정페이지를 토글하는 set함수입니다.
 *@property {function} setUserInfo                       - userInfo object값을 변경하는 set함수입니다.
 *@property {object} userInfo                            - 유저의 정보를 담고있는 useState입니다. 값은 object로 구성되어있습니다.
 */

const MyInfoEdit = ({ handleEditToggle, userInfo, setUserInfo }) => {
  /** 구조분해 할당을 정의합니다. */
  const { profileImg, name, nickname, birthDate, email, emailAddress } =
    userInfo;

  /** 미리보기를 사진데이터를 정의하는 useState 입니다. */
  const [profileImage, setProfileImage] = useState(profileImg);

  /** 프로필 이미지를 변경하는 함수입니다. */
  const handleImageChange = e => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setProfileImage(URL.createObjectURL(img));
      setUserInfo(userInfo => ({ ...userInfo, profileImg: img }));
    }
  };

  /** 유저 정보를 변경하고 업데이트 하는 함수입니다. */
  const saveEditInfo = event => {
    const { name, value } = event.target;
    // birthDate 필드에 대한 최대 길이를 정의합니다.
    const maxLengths = {
      birthDate: 8,
    };
    // 숫자만 입력가능한 필드일 경우 처리
    if (name in maxLengths) {
      const onlyNumberValue = value.replace(/[^\d]/g, ''); // 숫자가 아닌 문자 제거는 제거합니다.
      if (onlyNumberValue.length <= maxLengths[name]) {
        setUserInfo({ ...userInfo, [name]: onlyNumberValue });
      }
    } else {
      setUserInfo({ ...userInfo, [name]: value });
    }
  };

  /** 이메일 주소를 선택하는 셀렉트박스 함수입니다. */
  const saveSelectEmail = (value, name) => {
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  return (
    <section className="myInfoEditWrap">
      <form className="EditForm">
        <div className="EditWrap">
          <h3>내정보수정</h3>
          <IconButton
            content="Check"
            size="lg"
            onClick={handleEditToggle}
            type="submit"
          />
        </div>

        <fieldset>
          <legend className="myInfoLegend">내정보수정</legend>

          <div className="profileImgWrap">
            <label htmlFor="profileImageUpload" className="profileImageLabel">
              <img
                src={profileImage}
                alt="프로필이미지"
                className="profileImagePreview"
              />
              <input
                id="profileImageUpload"
                type="file"
                name="profileImg"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }}
              />
            </label>
          </div>
          <span className="profileImgClick">프로필변경 이미지 클릭</span>

          <div className="myInfoWrap">
            <Input
              type="text"
              label="이름"
              name="name"
              value={name}
              onChange={saveEditInfo}
            />
          </div>

          <div className="myInfoWrap">
            <Input
              type="text"
              label="닉네임"
              name="nickname"
              value={nickname}
              onChange={saveEditInfo}
            />
          </div>

          <div className="myInfoWrap">
            <Input
              type="text"
              label="생년월일"
              name="birthDate"
              value={birthDate}
              maxLength={8}
              onChange={saveEditInfo}
            />
          </div>

          <div className="myInfoEmailWrap">
            <Input
              type="text"
              label="이메일"
              name="email"
              value={email}
              onChange={saveEditInfo}
            />
            <span className="emailAddress">@</span>
          </div>

          <div className="myInfoWrap">
            <Input
              type="email"
              name="emailAddress"
              onChange={saveEditInfo}
              placeholder="직접입력"
              value={emailAddress === '직접입력' ? '' : emailAddress}
              disabled={EMAIL_DATA.indexOf(emailAddress) > 0 ? true : false}
            />
            <CustomSelectBox
              value="이메일 주소 선택"
              name="emailAddress"
              data={EMAIL_DATA}
              onChange={value => saveSelectEmail(value, 'emailAddress')}
            ></CustomSelectBox>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default MyInfoEdit;
