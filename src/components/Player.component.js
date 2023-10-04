import { useRef, useState, useEffect, useCallback } from "react";

// Import WaveSurfer
import WaveSurfer from "https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.esm.js";

const Player = () => {
  // A super-basic example

  const wavesurfer = WaveSurfer.create({
    container: document.body,
    waveColor: "rgb(200, 0, 200)",
    progressColor: "rgb(100, 0, 100)",
    url: "01.mp3",
  });

  wavesurfer.once("interaction", () => {
    wavesurfer.play();
  });
};
export default Player;
