import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        title={video.snippet.title}
        description={video.snippet.description}
      />
    );
  });

  return <div className="video-list">{renderedList}</div>;
};

export default VideoList;
