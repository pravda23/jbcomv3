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
  const [currentAudio, setCurrentAudio] = useState(undefined);
  const [playingState, setPlayingState] = useState("notStarted");

  useEffect(() => {
    if (currentAudio === undefined) {
      return;
    }

    // Create a new WaveSurfer instance
    const wavesurfer = WaveSurfer.create({
      container: wavesurferRef.current,
      waveColor: "white",
      progressColor: "#2665ad",
      height: 100,
      responsive: true,
      height: 128,
      barWidth: 12,
      barRadius: 10,
    });

    wavesurferObjRef.current = wavesurfer;

    wavesurfer.load(currentAudio);
    wavesurfer.once("ready", () => {
      console.log("wavesurfer play 1");
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

    console.log("h" + wavesurfer);

    return () => {
      // Clean up the WaveSurfer instance
      wavesurfer.destroy();
      console.log("wavesurfer destroy");
    };
  }, [currentAudio]);

  const handleAudioSelect = (audioFile) => {
    console.log("g" + wavesurferObjRef.current);
    if (currentAudio === audioFile) {
      if (playingState === "play") {
        wavesurferObjRef.current.pause();
      } else {
        wavesurferObjRef.current.play();
      }
      return;
    }
    setCurrentAudio(audioFile);
    console.log("setcurrentaudio");
  };

  return (
    <div>
      <div className="audio-list">
        <div>
          {audioFiles.map((audioFile) => (
            <div key={audioFile.id}>
              {currentAudio === audioFile.url && playingState === "play" ? (
                <BsFillPauseCircleFill
                  onClick={() => handleAudioSelect(audioFile.url)}
                >
                  {audioFile.url}
                </BsFillPauseCircleFill>
              ) : (
                <BsFillPlayCircleFill
                  onClick={() => handleAudioSelect(audioFile.url)}
                >
                  {audioFile.url}
                </BsFillPlayCircleFill>
              )}
            </div>
          ))}
        </div>
      </div>
      <div ref={wavesurferRef}></div>
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
