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
  const [currentAudio, setCurrentAudio] = useState("african-bliss-master.mp3");
  const [currentTitle, setCurrentTitle] = useState("placeholder");
  const [currentImage, setCurrentImage] = useState(
    "https://source.unsplash.com/collection/1163637/50x50"
  );
  const [playingState, setPlayingState] = useState("notStarted");
  const [wavesurferPlayBtn, setwavesurferPlayBtn] = useState(false);

  useEffect(() => {
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
              {/* {currentAudio === audioFile.url && playingState === "play" ? (
                <BsFillPauseCircleFill
                  onClick={() => handleAudioSelect({ audioFile })}
                >
                  {audioFile.url}
                </BsFillPauseCircleFill>
              ) : (
                <BsFillPlayCircleFill
                  onClick={() => handleAudioSelect({ audioFile })}
                >
                  {audioFile.url}
                </BsFillPlayCircleFill>
              )} */}
              {audioFile.title}
            </div>
          ))}
        </div>
      </div>
      <div className="wavesurfer-container">
        <div className="wavesurfer-img">
          <img src={currentImage} />
        </div>
        <div className="wavesurfer-waveform">
          <div ref={wavesurferRef}>{currentTitle}</div>
        </div>
      </div>
    </div>
  );
};

// PREVIOUS

// function AudioWaveform({ audioFile, clickHandle }) {
//   const waveformRef = useRef(null);

//   useEffect(() => {
//     const wavesurfer = WaveSurfer.create({
//       container: waveformRef.current,
//       responsive: true,
//       waveColor: "white",
//       progressColor: "aquamarine",
//       backend: "WebAudio",
//       barWidth: 10,
//       normalize: false,
//       barGap: 5,
//       barRadius: 10,
//       barHeight: 0.5,
//     });

//     wavesurfer.load(audioFile.url);

//     // wavesurfer.once("interaction", () => {
//     //   wavesurfer.play();
//     // });

//     // const playPause = () => {
//     //   currentFile === e ? wavesurfer.pause() : wavesurfer.play();
//     // };
//     // playPause();

//     return () => {
//       wavesurfer.destroy();
//     };
//   }, [audioFile]);

//   return (
//     <div>
//       <div ref={waveformRef}>
//         <button onClick={() => clickHandle(audioFile.url)}>Click</button>
//       </div>
//     </div>
//   );
// }

export default AudioWaveform;
