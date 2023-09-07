import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsVolumeDown,
  BsVolumeMute,
} from "react-icons/bs";
// Import React hooks
import { useRef, useState, useEffect, useCallback } from "react";

// Import WaveSurfer
import WaveSurfer from "https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.esm.js";
import WaveSurferPlayer from "./WaveSurferPlayer.js";

const Audio = () => {
  const audioJobs = [
    {
      id: "0",
      title: "VoiceMap",
      description: "GPS audio tour editing",
      link: "https://voicemap.me/theatreland",
      audioUrl:
        "https://media.voicemap.me/public/sound_bites/clips/000/010/534/original/01_START_TKTS_Ticket_Booth.mp3",
    },
    {
      id: "1",
      title: "Sound Africa",
      description:
        "'Think African' podcast production and development (supported by The Heinrich Boell Foundation)",
      link: "https://open.spotify.com/show/2HQNkLsuI9CoEnvPTZ2GIo",
      audioUrl: "https://johnbartmann.com/site-audio-smp/think-african-10.mp3",
    },
    {
      id: "2",
      title: "Develop Audio",
      description: "'Alibi' podcast production",
      link: "https://developaudio.org/anthony",
      audioUrl: "https://johnbartmann.com/site-audio-smp/alibi-s01e01.mp3",
    },
    {
      id: "3",
      title: "Telltale Media",
      description: "'Your Mom With Schalk' podcast mixing",
      link: "https://telltale.media/our-shows/schalk/",
      audioUrl: "https://media.transistor.fm/572b5785/7cbce5b6.mp3",
    },
    {
      id: "4",
      title: "Center Stage Collective",
      description: "'The LaFresian Chronicles' podcast production & score",
      link: "https://pod.link/Lafresiaaudio",
      audioUrl:
        "https://pinecast.com/listen/4aafbddf-ba68-4d83-8b6f-34e48014a553.mp3",
    },
    {
      id: "5",
      title: "Creative podcast production",
      description: "'How I Make Music' executive podcast production",
      link: "https://howimakemusic.com",
      audioUrl:
        "https://www.buzzsprout.com/1926734/11607725-dice-tower-theater-mike-atchley-dark-journey.mp3",
    },
  ];

  const wavesurfer = WaveSurfer.create({
    container: document.body,
    waveColor: "#4F4A85",
    progressColor: "#383351",
    splitChannels: false,
    url: "beep.mp3",
  });

  const useWavesurfer = (containerRef, options) => {
    const [wavesurfer, setWavesurfer] = useState(null);

    // Initialize wavesurfer when the container mounts or any of the props change
    useEffect(() => {
      if (!containerRef.current) return;

      const ws = WaveSurfer.create({
        ...options,
        container: containerRef.current,
      });

      setWavesurfer(ws);

      return () => {
        ws.destroy();
      };
    }, [options, containerRef]);

    return wavesurfer;
  };

  return (
    <div className="single-page-container">
      <div className="card-title">
        <div id="containerRef">
          {" "}
          <WaveSurferPlayer
            height={100}
            waveColor="rgb(200, 0, 200)"
            progressColor="rgb(100, 0, 100)"
            url={"beep.mp3"}
          />
        </div>
      </div>
    </div>
  );
};

export default Audio;
