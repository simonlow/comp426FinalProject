import React from "react";
import Video from "./Video";
import "./_video.css";

const VideoList = ({ data, onVideoSelected }) => {
  return (
    <div className="VideoList">
      <div style={{ padding: "10px 0" }}>
        <h3
          style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}
        >
          Search for Videos about Chapel Hill
        </h3>
        <Video data={data} onVideoSelected={onVideoSelected} />
      </div>
    </div>
  );
};

export default VideoList;