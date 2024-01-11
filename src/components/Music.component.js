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

  const updateTracks = () => {
    musicTracks.forEach((t) => {
      // add album title and image

      delete t.img_full;
      delete t.img_thumb;

      if (t.key <= 20) {
        t.albumTitle = "public-domain-soundtrack-music";
        t.img_full = `https:/johnbartmann.com/track-image/800/${t.albumTitle}.jpg`;
      }

      // t.img_full = `https:/johnbartmann.com/track-image/800/${t.url}.jpg`;
      // t.img_thumb = `https:/johnbartmann.com/track-image/THUMB_PATH`;
    });
  };

  updateTracks();
  // console.log(musicTracks[334]);
  console.log(musicTracks);

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
