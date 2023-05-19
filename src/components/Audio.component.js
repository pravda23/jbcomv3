import { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/src/styles.scss";
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsVolumeDown,
  BsVolumeMute,
} from "react-icons/bs";

const Audio = () => {
  const [currentTrack, setCurrentTrack] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

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
    <div>
      <h1>Podcast production, audio editing, mixing & mastering.</h1>
      {/* <h4>
        <AudioPlayer
          autoPlay={false}
          src={currentTrack}
          volume={0.1}
          showSkipControls={false}
          showJumpControls={false}
          customAdditionalControls={[]}
          layout="horizontal-reverse"
          // onPlay={(e) => {}}
          // other props here
        />
        <BsFillPlayCircleFill
          font-size={"2rem"}
          id="theatreland"
          onClick={(e) => handleClick(e)}
        />
      </h4> */}
      <h3>
        GPS audio tour editing for{" "}
        <a href="https://voicemap.me" target="_blank" rel="noopener">
          VoiceMap
        </a>{" "}
      </h3>
      <h4>
        Listen to a clip from{" "}
        <a href="https://voicemap.me/theatreland" target="_blank">
          'Theatreland' (narrated by Ian McKellen)
        </a>
      </h4>
      <h4>
        <audio
          controls
          src="https://media.voicemap.me/public/sound_bites/clips/000/010/534/original/01_START_TKTS_Ticket_Booth.mp3"
        ></audio>
      </h4>
      <h3>Non-fiction podcast production</h3>
      <h4>
        Listen to episode 10 of{" "}
        <a
          href="https://open.spotify.com/show/2HQNkLsuI9CoEnvPTZ2GIo"
          target="_blank"
        >
          Think, African
        </a>{" "}
        by{" "}
        <a href="https://soundafrica.org/" target="_blank">
          Sound Africa
        </a>{" "}
        and{" "}
        <a href="https://za.boell.org/" target="_blank">
          The Heinrich Boell Foundation
        </a>
      </h4>
      <h4>
        <audio
          controls
          src="https://johnbartmann.com/site-audio-smp/think-african-10.mp3"
        ></audio>
      </h4>
      <h4>
        Listen to episode 1 of{" "}
        <a
          href="https://podcasts.apple.com/za/podcast/alibi/id1209845144?mt=2"
          target="_blank"
        >
          Alibi
        </a>{" "}
        by{" "}
        <a
          href="https://www.volume.africa/alibi"
          target="_blank"
          rel="noopener"
        >
          Alibi Investigations
        </a>
      </h4>
      <h4>
        <audio
          controls
          src="https://johnbartmann.com/site-audio-smp/alibi-s01e01.mp3"
        ></audio>
      </h4>
      <h3>Entertainment podcast production </h3>
      <h4>
        Listen to episode 1 of{" "}
        <a href="https://telltale.media/our-shows/schalk/" target="_blank">
          Your Mom With Schalk
        </a>{" "}
        by{" "}
        <a href="https://telltale.media/" target="_blank">
          Telltale Media
        </a>
      </h4>
      <h4>
        <audio
          controls
          src="https://media.transistor.fm/572b5785/7cbce5b6.mp3"
        ></audio>
      </h4>
      <h3>Fiction podcast production </h3>
      <h4>
        Listen to episode 12 of{" "}
        <a href="https://pod.link/Lafresiaaudio" target="_blank">
          The LaFresian Chronicles
        </a>{" "}
        by Center Stage Collective
      </h4>
      <h4>
        <audio
          controls
          src="https://pinecast.com/listen/4aafbddf-ba68-4d83-8b6f-34e48014a553.mp3"
        ></audio>
      </h4>
      <strong />
      <h3>Executive podcast production</h3>
      <h4>
        Listen to episode 110 of{" "}
        <a href="https://howimakemusic.com" target="_blank" rel="noopener">
          How I Make Music
        </a>{" "}
      </h4>
      <h4>
        <audio
          controls
          src="https://www.buzzsprout.com/1926734/11607725-dice-tower-theater-mike-atchley-dark-journey.mp3"
        ></audio>
      </h4>
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
