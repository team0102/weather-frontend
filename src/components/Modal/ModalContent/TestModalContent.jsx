/**모달안에 마크업 컨텐츠 들을 결정하는 파일입니다.
 * 1.모달에 보여주고 싶은 마크업 스타일을 완성한후
 * 2.UseModal import한후 content 위치에 컴포넌트로 전달해줍니다.
 * content={<TestModalComponent/>} << 이러한 방식이 되겠습니다.
 */

const TestModalComponent = () => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <span style={{ margin: '50px', fontSize: '20px' }}>
        모달 컨텐츠에 프롭스 마크업은 만들기 나름입니다. 이것은 예시입니다.
      </span>
      <div style={{ display: 'flex', width: '100%' }}>
        <button style={{ width: '100%', padding: '10px 10px' }}>확인</button>
        <button style={{ width: '100%', padding: '10px 10px' }}>취소</button>
      </div>
    </div>
  );
};

export default TestModalComponent;
