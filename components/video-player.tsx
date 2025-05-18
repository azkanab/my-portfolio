"use client";
import React from "react";
import ReactPlayer from "react-player";

interface Props {
    videoSrc: string | undefined
}

const VideoPlayer = ({ videoSrc }: Props) => {

  return (
    <div className="h-48">
      <ReactPlayer
        width="100%"
        height="100%"
        url={videoSrc}
        controls={true}
        // light is usefull incase of dark mode
        light={false}
        // picture in picture
        pip={true}
      />
      <source src={videoSrc} type="video/mp4" />
    </div>
  );
};

export default VideoPlayer;