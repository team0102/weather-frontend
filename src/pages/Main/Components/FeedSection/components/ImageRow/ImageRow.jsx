import ImageTile from '../ImageTile/ImageTile';

import './ImageRow.scss';

/**
 * ImageRow props list
 * @property {object} feeds                        - 컴포넌트에 표시 할 feed 게시글의 array
 * @property {function} onTileClick                - ImageRow의 child인 타일을 클릭 할 때 실행 할 함수 
 */

const ImageRow = ({feeds, onTileClick}) => {
  return <div className="imageRow">
    {feeds.map((feed) => {
      return <ImageTile key={feed.feedId} id={feed.feedId} imageUrl={feed.imageUrl} onClick={onTileClick}/>
    })}
  </div>;
};

export default ImageRow;