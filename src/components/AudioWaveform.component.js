import WaveSurfer from "wavesurfer.js";
import React, { useState, useEffect, useRef } from "react";
import {
  BsFillPlayFill,
  BsFillPauseFill,
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsVolumeDown,
  BsVolumeMute,
  BsDownload,
  BsYoutube,
} from "react-icons/bs";

import { AiOutlineYoutube } from "react-icons/ai";

const AudioWaveform = ({ musicTracks }) => {
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

  let selectedTrack;

  const selectRandom = ({ musicTracks }) => {
    let arr = [];
    musicTracks.map((i) => arr.push(i.key));
    let selectedInteger = Math.floor(Math.random() * arr.length);
    selectedTrack = musicTracks[selectedInteger];
    console.log(selectedTrack.url_slug);
    setCurrentAudio(
      `https://johnbartmann.com/track/${selectedTrack.url_slug}-sample.mp3`
    );
    setCurrentTitle(selectedTrack.title);
  };

  return (
    <div>
      <button onClick={() => selectRandom({ musicTracks })}>Click</button>

      {musicTracks.map((musicTrack) => (
        <div className="audio-list-container" key={musicTrack.key}>
          <div
            className="audio-list"
            onClick={() => handleAudioSelect({ musicTrack })}
          >
            <img src={currentImage} />
            &nbsp;
            <div className="audio-list-title">{musicTrack.title}</div>
          </div>
          <a href={musicTrack.url_gum} target="_blank">
            <BsDownload style={{ fontSize: 18 }} />
          </a>
          &nbsp;
          <a href={musicTrack.url_yt} target="_blank">
            <AiOutlineYoutube />
          </a>
        </div>
      ))}
      <div className="wavesurfer-container">
        <div className="wavesurfer-img">
          <div
            className="wavesurfer-img-overlay"
            onClick={() => handleAudioPlayPause()}
            style={{
              backgroundImage: `url(${currentImage})`,
            }}
          >
            {!isPlaying ? <BsFillPlayFill /> : <BsFillPauseFill />}
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
