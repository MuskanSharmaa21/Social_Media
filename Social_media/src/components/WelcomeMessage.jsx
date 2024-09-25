const WelcomeMessage = ({onGetPostsClick}) => {
  return (
    <div>
      <h2>There are no posts</h2>
      <button type="button" className="btn btn-primary" onClick={onGetPostsClick}>Get Posts from server</button>
    </div>
  );
};

export default WelcomeMessage;
