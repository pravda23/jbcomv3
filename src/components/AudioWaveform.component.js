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

import { PiYoutubeLogoThin } from "react-icons/pi";
import { PiDiceFiveFill } from "react-icons/pi";

const AudioWaveform = ({ musicTracks }) => {
  const wavesurferRef = useRef(null);
  const wavesurferObjRef = useRef(null);
  const [currentAudio, setCurrentAudio] = useState();
  const [currentTitle, setCurrentTitle] = useState(
    "Select a track to start playing"
  );
  const [currentImage, setCurrentImage] = useState(
    "https://source.unsplash.com/collection/1163637/35x35"
  );
  const [playingState, setPlayingState] = useState("notStarted");
  const [isPlaying, setIsPlaying] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);

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
      barWidth: 2,
      barRadius: 4,
      barGap: 3,
    });

    wavesurferObjRef.current = wavesurfer;

    wavesurfer.load(currentAudio);
    wavesurfer.once("ready", () => {
      wavesurfer.play();
      console.log("ws once play");
    });

    wavesurfer.on("play", () => {
      setPlayingState("play");
      setIsPlaying(true);
      console.log("ws on  play");
    });
    wavesurfer.on("pause", () => {
      setPlayingState("pause");
      setIsPlaying(false);
      console.log("ws on pause");
    });
    wavesurfer.on("finish", () => {
      setPlayingState("finish");
      setIsPlaying(false);
      console.log("ws on finish");
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
        console.log(musicTrack.url_slug);
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
    setCurrentImage("https://source.unsplash.com/collection/1163637/35x35");
  };

  const handleAudioPlayPause = () => {
    if (playingState === "play") {
      wavesurferObjRef.current.pause();
      setIsPlaying(true);
    } else if (playingState !== "play") {
      wavesurferObjRef.current.play();
      setIsPlaying(false);
    } else {
      console.log("Error: Unknown state: " + playingState);
    }
  };

  let selectedTrack;

  const selectRandom = ({ musicTracks }) => {
    let arr = [];
    musicTracks.map((i) => arr.push(i.key));
    selectedTrack = musicTracks[Math.floor(Math.random() * arr.length)];
    console.log(selectedTrack.url_slug);
    setCurrentAudio(
      `https://johnbartmann.com/track/${selectedTrack.url_slug}-sample.mp3`
    );
    setCurrentTitle(selectedTrack.title);
  };

  return (
    <>
      {musicTracks.map((musicTrack) => (
        <div
          className="audio-list-item-container no-overflow"
          key={musicTrack.key}
        >
          <div
            className="audio-list-item"
            onClick={() => handleAudioSelect({ musicTrack })}
          >
            <img src={currentImage} />
            &nbsp;
            <div className="audio-list-title">{musicTrack.title}</div>
            <a href={musicTrack.url_gum} target="_blank">
              <BsDownload style={{ fontSize: 20 }} />
            </a>
            &nbsp;
            <a href={musicTrack.url_yt} target="_blank">
              <PiYoutubeLogoThin style={{ fontSize: 30 }} />
            </a>
          </div>
          {/* <a href={musicTrack.url_gum} target="_blank">
            <BsDownload style={{ fontSize: 18, marginBottom: 3 }} />
          </a>
          &nbsp;
          <a href={musicTrack.url_yt} target="_blank">
            <PiYoutubeLogoThin />
          </a> */}
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
            {!isPlaying ? (
              <BsFillPlayFill style={{ color: "black" }} />
            ) : (
              <BsFillPauseFill style={{ color: "black" }} />
            )}
          </div>
        </div>
        <div className="wavesurfer-waveform">
          <div style={{ width: "100%" }} ref={wavesurferRef}>
            {currentTitle}
          </div>
        </div>
        <div className="random-track-button">
          <span onClick={() => selectRandom({ musicTracks })}>
            <PiDiceFiveFill style={{ fontSize: 60 }} />
          </span>
        </div>
      </div>
    </>
  );
};

export default AudioWaveform;
