import ImageTile from '../ImageTile/ImageTile';

import './ImageRow.scss';

const ImageRow = ({feeds}) => {
  return <div className="imageRow">
    {feeds.map((feed) => {
      return <ImageTile imageUrl={feed.imageUrl} />
    })}
  </div>;
};

export default ImageRow;