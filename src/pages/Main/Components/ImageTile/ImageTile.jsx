import './ImageTile.scss';

/**
 * ImageTile props list
 * @property {string} imageUrl                     - 타일에 표시 할 이미지의 url
 * @property {function} onClick                    - 타일을 클릭 할 때 실행 할 함수 
 * @property {number} id                           - 각각의 이미지에 해당하는 geed의 id를 고유 id로 지정
 * @property {string} className: 'gap', 'rounded'  - 타일의 스타일링을 위한 className string
 */

const ImageTile = ({ imageUrl, onClick, id, className }) => {
  return (
    <div className={`imageTile ${className}`} >
      {
        imageUrl && <img key={id} id={id} src={imageUrl} onClick={onClick} />
      }
    </div>
  );
};

export default ImageTile;
