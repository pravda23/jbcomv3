import { useState } from "react";
import AudioWaveform from "./AudioWaveform.component.js";
import Footer from "./Footer.component.js";

const Audio = () => {
  const audioFiles = [
    {
      id: "a",
      url: "african-bliss-master.mp3",
      title: "track title 1",
      imgUrl: "https://source.unsplash.com/collection/1163637/50x50",
    },
    {
      id: "b",
      url: "african-moon-master.mp3",
      title: "track title 2",
      imgUrl: "https://source.unsplash.com/collection/1163637/50x50",
    },
    {
      id: "c",
      url: "african-secret-master.mp3",
      title: "track title 3",
      imgUrl: "https://source.unsplash.com/collection/1163637/50x50",
    },
    {
      id: "d",
      url: "african-bliss-master.mp3",
      title: "track title 4",
      imgUrl: "https://source.unsplash.com/collection/1163637/50x50",
    },
    {
      id: "e",
      url: "african-moon-master.mp3",
      title: "track title 5",
      imgUrl: "https://source.unsplash.com/collection/1163637/50x50",
    },
    {
      id: "f",
      url: "african-secret-master.mp3",
      title: "track title 6",
      imgUrl: "https://source.unsplash.com/collection/1163637/50x50",
    },
    {
      id: "g",
      url: "african-bliss-master.mp3",
      title: "track title 7",
      imgUrl: "https://source.unsplash.com/collection/1163637/50x50",
    },
    {
      id: "h",
      url: "african-moon-master.mp3",
      title: "track title 8",
      imgUrl: "https://source.unsplash.com/collection/1163637/50x50",
    },
    {
      id: "i",
      url: "african-secret-master.mp3",
      title: "track title 9",
      imgUrl: "https://source.unsplash.com/collection/1163637/50x50",
    },
    {
      id: "j",
      url: "african-bliss-master.mp3",
      title: "track title 10",
      imgUrl: "https://source.unsplash.com/collection/1163637/50x50",
    },
    {
      id: "k",
      url: "african-moon-master.mp3",
      title: "track title 11",
      imgUrl: "https://source.unsplash.com/collection/1163637/50x50",
    },
    {
      id: "l",
      url: "african-secret-master.mp3",
      title: "track title 12",
      imgUrl: "https://source.unsplash.com/collection/1163637/50x50",
    },
    {
      id: "m",
      url: "african-bliss-master.mp3",
      title: "track title 13",
      imgUrl: "https://source.unsplash.com/collection/1163637/50x50",
    },
  ];

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

  const [currentFile, setCurrentFile] = useState("african-bliss-master.mp3");
  const [isPlaying, setIsPlaying] = useState(false);

  const clickHandle = (e) => {
    console.log("clicked");
    setCurrentFile(e);
    setIsPlaying(true);
  };

  return (
    <div className="single-page-container-with-player">
      <div className="card-title">
        <div>
          <AudioWaveform audioFiles={audioFiles} clickHandle={clickHandle} />
        </div>
      </div>
    </div>
  );
};

export default Audio;
