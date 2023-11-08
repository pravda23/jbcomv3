import WaveSurfer from "https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.esm.js";
import React, { useState, useEffect, useRef } from "react";
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsVolumeDown,
  BsVolumeMute,
} from "react-icons/bs";

const AudioWaveform = ({ audioFiles }) => {
  const wavesurferRef = useRef(null);
  const wavesurferObjRef = useRef(null);
  const [currentAudio, setCurrentAudio] = useState();
  const [currentTitle, setCurrentTitle] = useState(
    "Select a track to start playing"
  );
  const [currentImage, setCurrentImage] = useState(
    "https://source.unsplash.com/collection/1163637/50x50"
  );
  const [playingState, setPlayingState] = useState("notStarted");
  const [wavesurferPlayBtn, setwavesurferPlayBtn] = useState(false);

  console.log("before useEffect");

  useEffect(() => {
    console.log("first line of useEffect");
    if (currentAudio === undefined) {
      return;
    }

    // Create a new WaveSurfer instance
    const wavesurfer = WaveSurfer.create({
      container: wavesurferRef.current,
      waveColor: "white",
      progressColor: "#2665ad",
      background: "black",
      height: 100,
      responsive: true,
      height: 24,
      barWidth: 4,
      barRadius: 4,
    });

    wavesurferObjRef.current = wavesurfer;

    wavesurfer.load(currentAudio);
    wavesurfer.once("ready", () => {
      wavesurfer.play();
    });

    wavesurfer.on("play", () => {
      setPlayingState("play");
    });
    wavesurfer.on("pause", () => {
      setPlayingState("pause");
    });
    wavesurfer.on("finish", () => {
      setPlayingState("finish");
    });

    console.log("before useEffect return");

    return () => {
      wavesurfer.destroy();
    };
  }, [currentAudio, currentTitle]);

  // sets current audio and playback state
  const handleAudioSelect = ({ audioFile }) => {
    if (currentAudio === audioFile.url) {
      if (playingState === "play") {
        wavesurferObjRef.current.pause();
        setwavesurferPlayBtn(false);
      } else {
        wavesurferObjRef.current.play();
        setwavesurferPlayBtn(true);
      }
      return;
    }
    setCurrentTitle(audioFile.title);
    setCurrentAudio(audioFile.url);
    setCurrentImage(audioFile.imgUrl);
  };

  const handleAudioPlayPause = () => {
    if (playingState === "play") {
      wavesurferObjRef.current.pause();
      console.log("paused");
    } else {
      wavesurferObjRef.current.play();
      console.log("playign");
    }
  };

  console.log("before AudioWaveform render");

  return (
    <div>
      <div className="audio-list">
        <div>
          {audioFiles.map((audioFile) => (
            <div
              key={audioFile.id}
              onClick={() => handleAudioSelect({ audioFile })}
            >
              <img src={audioFile.imgUrl} />
              &nbsp;
              {audioFile.title}
            </div>
          ))}
        </div>
      </div>
      <div className="wavesurfer-container">
        <div className="wavesurfer-img" onClick={() => handleAudioPlayPause()}>
          <div className="wavesurfer-img-overlay">
            <img src={currentImage} />
          </div>
        </div>
        <div className="wavesurfer-waveform">
          <div ref={wavesurferRef}>{currentTitle}</div>
        </div>
      </div>
    </div>
  );
};

export default AudioWaveform;
