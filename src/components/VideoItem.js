import React from "react";

const VideoItem = ({ title, description }) => {
  return (
    <div>
      <h2>{title}</h2>
      <h6>{description}</h6>
    </div>
  );
};

export default VideoItem;
