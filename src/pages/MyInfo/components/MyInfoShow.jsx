import IconButton from '../../../components/IconButton/IconButton';

const MyInfoShow = ({ handleEditToggle, userInfo }) => {
  const formatBirthDate = birthDate => {
    const numStr = birthDate;
    // 정규 표현식을 사용하여 포맷 변경
    return numStr.replace(/(\d{4})(\d{2})(\d{2})/, '$1.$2.$3');
  };

  const { profileImg, name, nickname, birthDate, email, emailAddress } =
    userInfo;

  return (
    <section className="myInfoEditWrap">
      <div className="EditWrap">
        <h3>내정보수정</h3>

        <IconButton
          content="Edit"
          size="lg"
          onClick={handleEditToggle}
          type="button"
        />
      </div>

      <div className="myInfoEditInner">
        <div className="profileImgInner">
          <img src={profileImg} alt="프로필 이미지" />
        </div>

        <div className="myInfoWrap">
          <>
            <label>이름</label>
            <span className="myInfoSpan">{name}</span>
          </>
        </div>

        <div className="myInfoWrap">
          <>
            <label>닉네임</label>
            <span className="myInfoSpan">{nickname}</span>
          </>
        </div>

        <div className="myInfoWrap">
          <>
            <label>생년월일</label>
            <span className="myInfoSpan">{formatBirthDate(birthDate)}</span>
          </>
        </div>

        <div className="myInfoWrap">
          <>
            <label>이메일</label>
            <span className="myInfoSpan">
              {email}@{emailAddress}
            </span>
          </>
        </div>
      </div>
    </section>
  );
};

export default MyInfoShow;
