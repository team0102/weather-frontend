import './ImageTile.scss';

/**
 * ImageTile props list
 * @property {string} imageUrl                     - 타일에 표시 할 이미지의 url
 * @property {function} onClick 기본값 null          - 타일을 클릭 할 때 실행 할 함수 
 */
const ImageTile = ({ imageUrl, onClick = null }) => {
  return (
    <div className="imageTile" onClick={onClick}>
      <img src={imageUrl} />
    </div>
  );
};

export default ImageTile;
