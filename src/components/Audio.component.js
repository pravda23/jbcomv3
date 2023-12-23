import { useState } from "react";
import AudioWaveform from "./AudioWaveform.component.js";
import musicTracks from "./musicTracks.json";

const Audio = () => {
  const [currentFile, setCurrentFile] = useState();
  const [isPlaying, setIsPlaying] = useState(false);

  const clickHandle = (e) => {
    setCurrentFile(e);
    setIsPlaying(true);
  };

  return (
    <div>
      <h1 className="center">MUSIC</h1>
      <h3>Original music for everyone.</h3>
      <div className="audio-list-container">
        <AudioWaveform musicTracks={musicTracks} clickHandle={clickHandle} />
      </div>
    </div>
  );
};

export default Audio;
