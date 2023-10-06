import React, { useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";

function AudioWaveform({ audioFile }) {
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

    return () => {
      wavesurfer.destroy();
    };
  }, [audioFile]);

  return (
    <div>
      <div ref={waveformRef}></div>
    </div>
  );
}

export default AudioWaveform;
