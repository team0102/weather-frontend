import './ImageTile.scss';

/**
 * ImageTile props list
 * @property {string} imageUrl                     - 타일에 표시 할 이미지의 url
 * @property {function} onClick                    - 타일을 클릭 할 때 실행 할 함수
 * @property {number} id                           - 각각의 이미지에 해당하는 geed의 id를 고유 id로 지정
 * @property {boolean} rounded                     - 이미지의 코너 라운딩 설정
 */

const ImageTile = ({ imageUrl, onClick, id, rounded }) => {
  return (
    <div className="imageTile">
      {imageUrl && (
        <img
          key={id}
          id={id}
          src={imageUrl}
          onClick={onClick}
          className={rounded ? 'rounded' : null}
        />
      )}
    </div>
  );
};

export default ImageTile;
