import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading!!!</div>;
  }
  return (
    <div>
      {video.snippet.title}
      {/* {video.snippet.description} */}
    </div>
  );
};

export default VideoDetail;
