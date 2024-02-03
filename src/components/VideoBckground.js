// VideoBackground.js
import React from "react";
import ReactPlayer from "react-player";

import "./VideoBackground.css";

const VideoBackground = () => {
  return (
    <div className="video-background">
      <ReactPlayer
        url="/bgvideo.mp4"
        playing={true}
        loop={true}
        muted={true}
        width="100%"
        height="100%"
        style={{ position: "absolute", top: 0, left: 0 }}
      />
      <div className="text-overlay">
        <img
          className="logo-image"
          src="/logo.png"
          alt="logo of anime awards"
        />
        <p className="home-paragraph">
          Welcome to our Anime Awards Voting Website, where anime enthusiasts
          can come together to celebrate their favorite series and characters.
          <br />
          Join us in recognizing the best of the best in the world of anime.
        </p>
      </div>
    </div>
  );
};

export default VideoBackground;
