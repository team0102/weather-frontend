import ImageTile from '../ImageTile/ImageTile';

import './ImageRow.scss';

const ImageRow = ({feeds}) => {
  return <div className="imageRow">
    {feeds.map((feed) => {
      return <ImageTile imageUrl={feed.imageUrl} onClick={() => console.log(feed.feedId)}/>
    })}
  </div>;
};

export default ImageRow;