import IconButton from '../../../../components/IconButton/IconButton';

const MyInfoShow = ({
  handleEditToggle,
  editToggle,
  setEditToggle,
  userInfo,
  setUserInfo,
}) => {
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
          <img src="" alt="프로필 이미지" />
        </div>

        <div className="myInfoWrap">
          <>
            <label>이름</label>
            <span>{userInfo.name}</span>
          </>
        </div>

        <div className="myInfoWrap">
          <>
            <label>닉네임</label>
            <span>{userInfo.nickname}</span>
          </>
        </div>

        <div className="myInfoWrap">
          <>
            <label>생년월일</label>
            <span>{userInfo.birthDate}</span>
          </>
        </div>

        <div className="myInfoWrap">
          <>
            <label>이메일</label>
            <span>{userInfo.name}</span>
          </>
        </div>
      </div>
    </section>
  );
};

export default MyInfoShow;
