import { useState } from "react";
import AudioWaveform from "./AudioWaveform.component.js";
import musicTracks from "./musicTracks.json";

const Music = () => {
  const [currentFile, setCurrentFile] = useState();
  const [isPlaying, setIsPlaying] = useState(false);

  const clickHandle = (e) => {
    setCurrentFile(e);
    setIsPlaying(true);
  };

  return (
    <div>
      <h1 className="center">MUSIC</h1>
      <p className="center" style={{ margin: 30 }}>
        Creative Commons music tracks and templates for everyone.
      </p>
      <div className="audio-list-container">
        <AudioWaveform musicTracks={musicTracks} clickHandle={clickHandle} />
      </div>
    </div>
  );
};

export default Music;
