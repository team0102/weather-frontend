import { useState } from 'react';
import IconButton from '../../../components/IconButton/IconButton';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import CustomSelectBox from '../../../components/SelectBox/CustomSelectBox/CustomSelectBox';
import RadioGroup from '../../../components/RadioGroup/RadioGroup';
import { EMAIL_DATA } from '../../../data/EmailAddressData/EmailAddressData';
import { RADIO_GROUP_GENDER_DATA } from '../../../data/RadioGenderData/RadioGenderData';
import { LOCATION_INFORMATION_AGREE_DATA } from '../../../data/LocationInformationAgreeData/LocationInformationAgreeData';
import { TEMPERATURE_SENSITIVITY_DATA } from '../../../data/TemperatureSensitivityData/TemperatureSensitivityData';
import { CITY_DATA } from '../../../data/CityData/CityData';

/**
 * MyInfoEdit props list
 *@property {function} handleEditToggle                  - 수정페이지를 토글하는 set함수입니다.
 *@property {function} setUserInfo                       - userInfo object값을 변경하는 set함수입니다.
 *@property {object} userInfo                            - 유저의 정보를 담고있는 useState입니다. 값은 object로 구성되어있습니다.
 */

const MyInfoEdit = ({ handleEditToggle, userInfo, setUserInfo }) => {
  /** 구조분해 할당을 정의합니다. */
  const { profileImage, nickname, email, emailAddress } = userInfo;

  /** 미리보기를 사진데이터를 정의하는 useState 입니다. */
  const [profileImg, setProfileImg] = useState(profileImage);

  /** 프로필 이미지를 변경하는 함수입니다. */
  const handleImageChange = e => {
    // 파일이 업로드되었고 첫 번째 파일이 있는지 확인합니다.
    if (e.target.files && e.target.files[0]) {
      // 첫 번째 업로드된 파일 (이미지)에 접근합니다.
      let img = e.target.files[0];

      // 미리보기 용도로 업로드된 파일에 대한 임시 URL을 생성합니다.
      setProfileImg(URL.createObjectURL(img));

      // 다른 userInfo 값을 보존하면서 새 이미지 파일로 userInfo 상태를 업데이트합니다.
      setUserInfo(userInfo => ({ ...userInfo, profileImage: img }));
    }
  };

  /** 유저 정보를 변경하고 업데이트 하는 함수입니다. */
  const saveEditInfo = event => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  /** 이메일 주소를 선택하는 SelectBox 함수입니다. */
  const saveSelectEmail = (value, name, id) => {
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const nicknameCheck = () => {
    alert('아이디 중복체크');
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
                src={profileImg}
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

          <div className="nicknameInner">
            <Input
              type="text"
              label="닉네임"
              name="nickname"
              value={nickname}
              onChange={saveEditInfo}
            />
            <div className="checkBtnInner">
              <Button
                children="중복체크"
                type="button"
                onClick={nicknameCheck}
              />
            </div>
          </div>

          <div className="radioTitleInner">
            <span>성별</span>
          </div>
          <RadioGroup RadioData={RADIO_GROUP_GENDER_DATA} />

          <div className="radioTitleInner">
            <span>위치동의</span>
          </div>
          <RadioGroup RadioData={LOCATION_INFORMATION_AGREE_DATA} />

          <div className="radioTitleInner">
            <span>온도감도</span>
          </div>
          <RadioGroup RadioData={TEMPERATURE_SENSITIVITY_DATA} />

          <div className="myInfoWrap">
            <Input
              type="text"
              name="cityId"
              label="내지역"
              placeholder="지역을 선택하세요."
              disabled={true}
            />
            <CustomSelectBox
              value="내지역을 선택하세요."
              name="cityId"
              data={CITY_DATA.map(item => item.value)}
              onChange={value => saveSelectEmail(value, 'cityId')}
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
            />
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default MyInfoEdit;
