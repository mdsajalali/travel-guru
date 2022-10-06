import Spinner from "react-bootstrap/Spinner";
import React from "react";

const Loading = () => {
  return (
    <div className="text-center pack-top">
      <Spinner animation="border" />
    </div>
  );
};

export default Loading;
