import WaveSurfer from "wavesurfer.js";
import React, { useState, useEffect, useRef } from "react";
import {
  BsFillPlayFill,
  BsFillPauseFill,
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsVolumeDown,
  BsVolumeMute,
} from "react-icons/bs";

const AudioWaveform = ({ musicTracks }) => {
  const wavesurferRef = useRef(null);
  const wavesurferObjRef = useRef(null);
  const [currentAudio, setCurrentAudio] = useState(
    "https://johnbartmann.com/track/african-moon-sample.mp3"
  );
  const [currentTitle, setCurrentTitle] = useState(
    "Select a track to start playing"
  );
  const [currentImage, setCurrentImage] = useState(
    "https://source.unsplash.com/collection/1163637/50x50"
  );
  const [playingState, setPlayingState] = useState("notStarted");
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (currentAudio === undefined) {
      return;
    }

    console.log(currentAudio);
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
  const handleAudioSelect = ({ musicTrack }) => {
    if (
      currentAudio ===
      `https://johnbartmann.com/track/${musicTrack.url_slug}.mp3`
    ) {
      if (playingState === "play") {
        wavesurferObjRef.current.pause();
        setIsPlaying(true);
      } else {
        wavesurferObjRef.current.play();
        setIsPlaying(false);
      }
      return;
    }
    setCurrentTitle(musicTrack.title);
    setCurrentAudio(
      `https://johnbartmann.com/track/${musicTrack.url_slug}-sample.mp3`
    );
    setCurrentImage("https://source.unsplash.com/collection/1163637/50x50");
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
        <div></div>
        <div>
          {musicTracks.map((musicTrack) => (
            <div
              key={musicTrack.key}
              onClick={() => handleAudioSelect({ musicTrack })}
            >
              <img src={currentImage} />
              &nbsp;
              {musicTrack.title}
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
