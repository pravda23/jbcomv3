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
      <div className="card-title">
        <div>
          <AudioWaveform musicTracks={musicTracks} clickHandle={clickHandle} />
        </div>
      </div>
    </div>
  );
};

export default Audio;
