import React from "react";
import ReactPlayer from "react-player";
import "react-h5-audio-player/src/styles.scss";

import MusicProfiles from "./MusicProfiles.component";

const Music = () => {
  return (
    <div className="single-page-container">
      <h1>MUSIC</h1>
      <h3>Follow the links to listen to music from my various profiles.</h3>
      <MusicProfiles />
      <br />
      <h3>Interactive music player coming soon!</h3>
    </div>
  );
};
export default Music;
