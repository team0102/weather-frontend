import ImageTile from '../ImageTile/ImageTile';

import './ImageRow.scss';

/**
 * ImageRow props list
 * @property {number} numColumns                   - ImageRow에 표시 할 최대 사진의 갯수
 * @property {object} items                        - 컴포넌트에 표시 할 item의 array
 * @property {function} onTileClick                - ImageRow의 child인 타일을 클릭 할 때 실행 할 함수
 * @property {boolean} gap                         - ImageTile들의 간격을 설정
 * @property {boolean} rounded                     - ImageTile의 코너 라운딩 설정
 */

const ImageRow = ({ numColumns, items, onTileClick, gap, rounded }) => {
  // items의 개수가 3보다 적은 경우 빈자리를 만들어주어
  // 항상 같은 사이즈의 이미지 타일이 생성됩니다.
  const itemsCount = items.length;
  for (let i = 0; i < numColumns - itemsCount; i++) {
    items.push({ feedId: `dummy${i}` });
  }

  return (
    <div className="imageRow">
      {items.map((item, index) => {
        return (
          <ImageTile
            key={index}
            id={item.id}
            imageUrl={item.imageUrl}
            onClick={onTileClick}
            className={`${gap && 'gap'} ${rounded && 'rounded'}`}
          />
        );
      })}
    </div>
  );
};

export default ImageRow;
