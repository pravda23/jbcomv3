import { useState } from "react";
import AudioWaveform from "./AudioWaveform.component.js";

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

  const [currentFile, setCurrentFile] = useState("african-bliss-master.mp3");
  const [isPlaying, setIsPlaying] = useState(false);

  const audioFiles = [
    {
      id: "a",
      url: "african-bliss-master.mp3",
    },
    {
      id: "b",
      url: "african-moon.mp3",
    },
    {
      id: "c",
      url: "african-secret-master.mp3",
    },
  ];

  const clickHandle = (e) => {
    setCurrentFile(e);
    setIsPlaying(true);
  };

  return (
    <div className="single-page-container">
      <div className="card-title">
        <div>
          {/* {audioFiles.map((audioFile) => (
            <div key={audioFile.id}> */}
          <AudioWaveform audioFiles={audioFiles} clickHandle={clickHandle} />
          {/* </div>
          ))} */}
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className="single-page-container">
  //     <div className="card-title">
  //       <div>
  //         {" "}
  //         {audioJobs.map((job) => {
  //           return (
  //             <div className="card-container">
  //               <div className="card-title">
  //                 <h1>{job.title}</h1>
  //                 <Player
  //                   height={100}
  //                   waveColor="rgb(200, 0, 200)"
  //                   progressColor="rgb(100, 0, 100)"
  //                   url={job.audioUrl}
  //                 />
  //               </div>
  //             </div>
  //           );
  //         })}
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Audio;
