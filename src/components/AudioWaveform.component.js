import React, { useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";
import { WaveForm } from "wavesurfer-react";

function AudioWaveform({ audioFile }) {
  const waveformRef = useRef(null);
  console.log({ audioFile });

  useEffect(() => {
    const wavesurfer = WaveSurfer.create({
      container: waveformRef.current,
      responsive: true,
      waveColor: "white",
      progressColor: "aquamarine",
      backend: "WebAudio",
      barWidth: 10,
      normalize: false,
      /** Spacing between bars in pixels */
      barGap: 5,
      /** Rounded borders for bars */
      barRadius: 10,
      /** A vertical scaling factor for the waveform */
      barHeight: 0.5,
    });

    wavesurfer.load(audioFile);

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
