import WaveSurfer from "https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.esm.js";
import React, { useState, useEffect, useRef } from "react";
import {
  BsFillPlayFill,
  BsFillPauseFill,
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
  const [currentImage, setCurrentImage] = useState(null);
  const [playingState, setPlayingState] = useState("notStarted");
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (currentAudio === undefined) {
      return;
    }

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
      setIsPlaying(true);
    });
    wavesurfer.on("pause", () => {
      setPlayingState("pause");
      setIsPlaying(false);
    });
    wavesurfer.on("finish", () => {
      setPlayingState("finish");
      setIsPlaying(false);
    });

    return () => {
      wavesurfer.destroy();
    };
  }, [currentAudio, currentTitle]);

  // sets current audio and playback state
  const handleAudioSelect = ({ audioFile }) => {
    if (currentAudio === audioFile.url) {
      if (playingState === "play") {
        wavesurferObjRef.current.pause();
        setIsPlaying(true);
      } else {
        wavesurferObjRef.current.play();
        setIsPlaying(false);
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
      setIsPlaying(true);
    } else {
      wavesurferObjRef.current.play();
      setIsPlaying(false);
    }
  };

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
        <div className="wavesurfer-img">
          <div
            className="wavesurfer-img-overlay"
            onClick={() => handleAudioPlayPause()}
            style={{
              backgroundImage: `url(${currentImage})`,
            }}
          >
            {!isPlaying ? (
              <BsFillPlayFill style={{ zIndex: 2 }} />
            ) : (
              <BsFillPauseFill style={{ zIndex: 2 }} />
            )}
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
