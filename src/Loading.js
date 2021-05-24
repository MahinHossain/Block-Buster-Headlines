const Loading = ({ isloading }) => {
  return (
    <div className="d-flex align-items-center">
      <h4 className="text-danger">Loading......</h4>
      <div
        className="spinner-border text-danger ml-auto"
        role="status"
        aria-hidden="true"
      ></div>
    </div>
  );
};

export default Loading;
