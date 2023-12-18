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
    <div className="single-page-container-with-player">
      <h1>MUSIC</h1>
      <h3>Original Creative Commons music for videos and games.</h3>
      <br />
      <div className="card-title">
        <div>
          <AudioWaveform musicTracks={musicTracks} clickHandle={clickHandle} />
        </div>
      </div>
    </div>
  );
};

export default Audio;
