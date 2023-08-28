import { useState } from "react";
import Card from "./Card.component";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/src/styles.scss";
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsVolumeDown,
  BsVolumeMute,
} from "react-icons/bs";
import WaveSurfer from "wavesurfer.js";

const Audio = () => {
  const [currentTrack, setCurrentTrack] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  const audioJobs = [
    {
      title: "VoiceMap",
      description: "GPS audio tour editing",
      link: "https://voicemap.me/theatreland",
      audioUrl:
        "https://media.voicemap.me/public/sound_bites/clips/000/010/534/original/01_START_TKTS_Ticket_Booth.mp3",
    },
    {
      title: "Sound Africa",
      description:
        "'Think African' podcast production and development (supported by The Heinrich Boell Foundation)",
      link: "https://open.spotify.com/show/2HQNkLsuI9CoEnvPTZ2GIo",
      audioUrl: "https://johnbartmann.com/site-audio-smp/think-african-10.mp3",
    },
    {
      title: "Develop Audio",
      description: "'Alibi' podcast production",
      link: "https://developaudio.org/anthony",
      audioUrl: "https://johnbartmann.com/site-audio-smp/alibi-s01e01.mp3",
    },
    {
      title: "Telltale Media",
      description: "'Your Mom With Schalk' podcast mixing",
      link: "https://telltale.media/our-shows/schalk/",
      audioUrl: "https://media.transistor.fm/572b5785/7cbce5b6.mp3",
    },
    {
      title: "Center Stage Collective",
      description: "'The LaFresian Chronicles' podcast production & score",
      link: "https://pod.link/Lafresiaaudio",
      audioUrl:
        "https://pinecast.com/listen/4aafbddf-ba68-4d83-8b6f-34e48014a553.mp3",
    },
    {
      title: "Creative podcast production",
      description: "'How I Make Music' executive podcast production",
      link: "https://howimakemusic.com",
      audioUrl:
        "https://www.buzzsprout.com/1926734/11607725-dice-tower-theater-mike-atchley-dark-journey.mp3",
    },
  ];

  const trackUrl = {
    theatreland:
      "https://media.voicemap.me/public/sound_bites/clips/000/010/534/original/01_START_TKTS_Ticket_Booth.mp3",
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(e);
    togglePlay();
    setCurrentTrack(trackUrl.theatreland);

    // setCurrentTrack(currentTrack);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="single-page-container">
      <h1>AUDIO</h1>
      {audioJobs.map((job) => {
        return Card(job.title, job.description, job.link, job.audioUrl);
      })}
      <br />
      <br />
      <h1>PODCAST PRODUCTION & PROMOTIONAL TOOLS</h1>
      DAWs Hindenberg Broadcast Pro, Reaper, Ableton Live, Audacity
      <br />
      AUDIO REPAIR Izotope RX8 <br />
      MUSIC COMPOSITION Native Instruments Komplete <br />
      VIDEO - Veed.io, Adobe Premiere Pro
      <br />
      IMAGES - Adobe Photoshop
      <br />
      TRANSCRIPTS - Descript
    </div>
  );
};

export default Audio;
