const FeedModalContent = ({feed}) => {
  return <div className="modalContent">
      {feed.imageUrl && <img src={feed.imageUrl} />}
      <div className="feedContent">{feed.content}</div>
    </div>;
};

export default FeedModalContent;
