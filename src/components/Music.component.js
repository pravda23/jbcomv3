import React from "react";
import ReactPlayer from "react-player";
import "react-h5-audio-player/src/styles.scss";

import MusicProfiles from "./MusicProfiles.component";
import Card from "./Card.component";

const Music = () => {
  const musicTracks = [
    {
      id: "a",
      url: "african-bliss-master.mp3",
    },
    {
      id: "b",
      url: "african-moon.mp3",
    },
    {
      id: "c",
      url: "african-secret-master.mp3",
    },
  ];

  return <MusicProfiles />;
};
export default Music;
