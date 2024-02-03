import IconButton from '../../../../components/IconButton/IconButton';
import Input from '../../../../components/Input/Input';

const MyInfoEdit = ({
  handleEditToggle,
  editToggle,
  setEditToggle,
  userInfo,
  setUserInfo,
  saveEditInfo,
}) => {
  return (
    <section className="myInfoEditWrap">
      <div className="EditWrap">
        <h3>내정보수정</h3>
        <IconButton content="Check" size="lg" onClick={handleEditToggle} />
      </div>

      <form>
        <fieldset>
          <legend>내정보수정</legend>
          <Input
            type="text"
            label="이름"
            name="name"
            // value={name}
            // onChange={saveEditInfo}
          />
          <Input
            type="text"
            label="닉네임"
            name="nickname"
            // value={nickname}
            // onChange={saveEditInfo}
          />

          <Input
            type="text"
            label="생년월일"
            name="birthDate"
            // value={birthDate}
            maxLength={8}
            // onChange={saveEditInfo}
          />
          <Input
            type="text"
            label="이메일"
            name="email"
            // onChange={saveEditInfo}
          />
        </fieldset>
      </form>
    </section>
  );
};

export default MyInfoEdit;
