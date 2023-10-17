import React, { useState, useEffect, useRef } from "react";
// import WaveSurfer from "wavesurfer.js";
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsVolumeDown,
  BsVolumeMute,
} from "react-icons/bs";

const AudioWaveform = ({ audioFiles }) => {
  const wavesurferRef = useRef(null);
  const [currentAudio, setCurrentAudio] = useState();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Create a new WaveSurfer instance
    const wavesurfer = WaveSurfer.create({
      container: wavesurferRef.current,
      waveColor: "violet",
      progressColor: "purple",
      height: 100,
      responsive: true,
    });

    wavesurfer.load(currentAudio);
    wavesurfer.once("interaction", () => {
      console.log("wavesurfer play 1");
      setIsPlaying(true);
      wavesurfer.play();
    });

    return () => {
      // Clean up the WaveSurfer instance
      wavesurfer.destroy();
      console.log("wavesurfer destroy");
    };
  }, [currentAudio, isPlaying]);

  const handleAudioSelect = (audioFile) => {
    setCurrentAudio(`${audioFile}`);
    console.log("setcurrentaudio");
    setIsPlaying(true);
    console.log("setisplayingtrue");
  };

  return (
    <div>
      <div className="audio-list">
        <div>
          {audioFiles.map((audioFile) => (
            <div key={audioFile.id}>
              <BsFillPlayCircleFill
                onClick={() => handleAudioSelect(audioFile.url)}
              >
                {audioFile.url}
              </BsFillPlayCircleFill>
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
