import IconButton from '../../../components/IconButton/IconButton';

/**
 * MyInfoShow props list
 *@property {function} handleEditToggle                  - 수정페이지를 토글하는 set함수입니다.
 *@property {object}   userInfo                          - 유저의 정보를 담고있는 useState입니다. 값은 object로 구성되어있습니다.
 */

const MyInfoShow = ({ handleEditToggle, userInfo }) => {
  /** 구조분해 할당을 정의합니다. */
  const { profileImage, nickname, email, emailAddress } = userInfo;

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
          <img src={profileImage} alt="프로필 이미지" />
        </div>

        <div className="myInfoWrap">
          <>
            <label>닉네임</label>
            <span className="myInfoSpan">{nickname}</span>
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
