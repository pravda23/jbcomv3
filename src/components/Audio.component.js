import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsVolumeDown,
  BsVolumeMute,
} from "react-icons/bs";
import { useRef, useState, useEffect, useCallback } from "react";
// import Player from "./Player.js";

// Import WaveSurfer
import WaveSurfer from "https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.esm.js";

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

  // WaveSurfer hook
  const useWavesurfer = (containerRef, options) => {
    const [wavesurfer, setWavesurfer] = useState(null);

    // Initialize wavesurfer when the container mounts or any of the props change
    useEffect(() => {
      if (!containerRef.current);

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

  // Create a React component that will render wavesurfer. Props are wavesurfer options.

  const WaveSurferPlayer = (props) => {
    const containerRef = useRef();
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const wavesurfer = useWavesurfer(containerRef, props);

    // On play button click
    const onPlayClick = useCallback(() => {
      wavesurfer.isPlaying() ? wavesurfer.pause() : wavesurfer.play();
    }, [wavesurfer]);

    // Initialize wavesurfer when the container mounts or any of the props change
    useEffect(() => {
      if (!wavesurfer) return;

      setCurrentTime(0);
      setIsPlaying(false);
      // setCurrentAudioUrl(audioJobs.url);

      const subscriptions = [
        wavesurfer.on("play", () => setIsPlaying(true)),
        wavesurfer.on("pause", () => setIsPlaying(false)),
        wavesurfer.on("timeupdate", (currentTime) =>
          setCurrentTime(currentTime)
        ),
      ];

      return () => {
        subscriptions.forEach((unsub) => unsub());
      };
    }, [wavesurfer]);

    return (
      <>
        <div ref={containerRef} />

        <button onClick={onPlayClick} style={{ marginTop: "1em" }}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <p>Seconds played: {currentTime}</p>
      </>
    );
  };

  return (
    <div className="single-page-container">
      <div className="card-title">
        {audioJobs.map((job) => {
          return (
            <div key={job.id} className="card-container">
              <div className="card-title">
                <h1>{job.title}</h1>
                <WaveSurferPlayer
                  height={100}
                  waveColor="rgb(200, 0, 200)"
                  progressColor="rgb(100, 0, 100)"
                  url={job.audioUrl}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Audio;
