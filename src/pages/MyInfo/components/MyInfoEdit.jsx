import IconButton from '../../../components/IconButton/IconButton';
import Input from '../../../components/Input/Input';
import CustomSelectBox from '../customSelectBox/customSelectBox';
import { EMAIL_DATA } from '../../../data/EmailAddressData/EmailAddressData';

const MyInfoEdit = ({ handleEditToggle, userInfo }) => {
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
      setUserInfo({ ...userInfo, [name]: value });
    }
  };
  const { profileImg, name, nickname, birthDate, email } = userInfo;
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

          <div className="myInfoWrap">
            <Input
              type="text"
              label="이메일"
              name="email"
              value={email}
              onChange={saveEditInfo}
            />
            @
            <CustomSelectBox
              value="이메일 주소 선택"
              name="emailAddress"
              data={EMAIL_DATA}
            ></CustomSelectBox>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default MyInfoEdit;
