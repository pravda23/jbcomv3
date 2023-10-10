import React, { useState, useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";

function AudioWaveform({ audioFile, clickHandle, isPlaying }) {
  const waveformRef = useRef(null);

  useEffect(() => {
    const wavesurfer = WaveSurfer.create({
      container: waveformRef.current,
      responsive: true,
      waveColor: "white",
      progressColor: "aquamarine",
      backend: "WebAudio",
      barWidth: 10,
      normalize: false,
      barGap: 5,
      barRadius: 10,
      barHeight: 0.5,
    });

    wavesurfer.load(audioFile.url);

    // wavesurfer.once("interaction", () => {
    //   wavesurfer.play();
    // });

    // const playPause = () => {
    //   currentFile === e ? wavesurfer.pause() : wavesurfer.play();
    // };
    // playPause();

    return () => {
      wavesurfer.destroy();
    };
  }, [audioFile]);

  return (
    <div>
      <div ref={waveformRef}>
        <button onClick={() => clickHandle(audioFile.url)}>Click</button>
      </div>
    </div>
  );
}

export default AudioWaveform;
