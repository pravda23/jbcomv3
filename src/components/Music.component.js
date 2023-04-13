import ReactPlayer from "react-player";

const Music = () => {
  const trackArr = [
    {
      title: "1",
      trackUrl: "1",
    },
    {
      title: "2",
      trackUrl: "2",
    },
    {
      title: "3",
      trackUrl: "3",
    },
  ];

  return (
    <div>
      <h1>Music assets for brands, storytellers and social media.</h1>

      <h3>
        Commercial music production (
        <a href="http://pravdaofficial.com/music/" target="_blank">
          view all
        </a>
        )
      </h3>
      <h4>
        <div className="gallery-container">
          <div className="gallery-item-container">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=lOygAQEQ5To"
              width="18rem"
              height="auto"
            />
            Pravda - Night & Day ( Wagram Music )
          </div>
          <div className="gallery-item-container">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=mX1SgwsDNS8"
              width="18rem"
              height="auto"
            />
            Pravda - Wooden Wendy
          </div>
        </div>
      </h4>

      <h3>
        Royalty-free music theme pack production (
        <a
          href="https://www.youtube.com/watch?v=pkmWkcH_7Qc&list=PLuqUikzY1o5XWKR-oattHw_Atq9FLOhm1"
          target="_blank"
        >
          view all
        </a>{" "}
        |{" "}
        <a
          href="https://docs.google.com/spreadsheets/d/1lSEnqwGfV7shU5GsO8Cf6FSbFAf73gCFOlyzhbLuamo/edit#gid=1537321504"
          target="_blank"
        >
          view metadata
        </a>
        )
      </h3>
      <h4>
        <div className="gallery-container">
          <div className="gallery-item-container">
            <ReactPlayer
              url="https://youtu.be/v3xt1u3C1M8"
              width="18rem"
              height="auto"
            />
            90s TV Sitcom Themes
          </div>
          <div className="gallery-item-container">
            <ReactPlayer
              url="https://youtu.be/1DAoz6e3JG8"
              width="18rem"
              height="auto"
            />
            Machine Learning
          </div>
          <div className="gallery-item-container">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=kXXxEqZu7eI"
              width="18rem"
              height="auto"
            />
            Underwater Wonders
          </div>
        </div>
      </h4>

      <h3>Narrative scoring & film/TV soundtrack music production</h3>
      <h4>
        Film music (contributing) composition (Leon Schuster 'Frank & Fearless'){" "}
      </h4>
      <h4>
        {" "}
        <ReactPlayer
          url="https://youtu.be/_8slPqV-16w"
          width="18rem"
          height="auto"
        />
      </h4>
      <h3>Jingle & meme music production</h3>
      <h4>
        90s-themed parody jingle music for{" "}
        <a href="https://www.linkedin.com/company/memotiv/" target="_blank">
          Mēmotiv
        </a>
      </h4>
      <h4>
        <audio
          controls
          src="https://johnbartmann.com/site-audio-smp/spdwrk-jingle-02.wav"
        ></audio>
      </h4>

      <h3>Library music production</h3>
      <h4>
        {" "}
        Fantasy-themed album{" "}
        <a
          href="https://dnamusik.sourceaudio.com/album/3646849."
          target="_blank"
        >
          'Fairytales and Fantasy' - DNA Muzik
        </a>
      </h4>
      <h4>
        <audio
          controls
          src="https://johnbartmann.com/site-audio-smp/just-trolling-along.mp3"
        ></audio>
      </h4>

      <h3>Live music performance aliases</h3>
      <h4>
        {" "}
        <a href="https://getjohnnyjazz.com/" target="_blank">
          JohnnyJazz - electronic jazz outfit
        </a>
      </h4>
      <h4>
        <a href="https://pravdaofficial.com" target="_blank">
          Pravda - original lyrical songwriting
        </a>
      </h4>
      <h4>
        <a
          href="https://www.capetownswing.co.za/the-pebble-shakers/"
          target="_blank"
        >
          The Pebble Shakers - South African jazz
        </a>
      </h4>
      <h4>
        <a href="https://thegreatgatsbys.com" target="_blank">
          The Great Gatsbys - swing jazz
        </a>
      </h4>
      <h4>
        <a href="https://dukesofnote.com/" target="_blank">
          The Dukes of Note - carnival rock
        </a>
      </h4>

      <h3>Music profiles</h3>
      <h4>
        <a href="https://youtube.com/c/johnbartmannmusic" target="_blank">
          YouTube
        </a>{" "}
        •{" "}
        <a
          href="https://open.spotify.com/artist/3ZkQ69zxOePFLOGLj0N15C"
          target="_blank"
        >
          Spotify
        </a>{" "}
        •{" "}
        <a
          href="https://freemusicarchive.org/music/John_Bartmann/"
          target="_blank"
        >
          Free Music Archive
        </a>{" "}
        •{" "}
        <a
          href="https://music.apple.com/us/artist/john-bartmann/1081298778"
          target="_blank"
        >
          Apple Music
        </a>{" "}
        •{" "}
        <a
          href="https://music.amazon.com/artists/B071YYY529/john-bartmann"
          target="_blank"
        >
          Amazon Music
        </a>{" "}
        •{" "}
        <a href="https://johnbartmann.bandcamp.com" target="_blank">
          Bandcamp
        </a>{" "}
        •{" "}
        <a href="https://soundcloud.com/johnbartmannmusic/" target="_blank">
          Soundcloud
        </a>
      </h4>
    </div>
  );
};

export default Music;
