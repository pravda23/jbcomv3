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
      <h1>
        Commercial and royalty-free music for brands, storytellers and social
        media.
      </h1>

      <ReactPlayer
        url="https://youtu.be/v3xt1u3C1M8"
        width="25vw"
        height="auto"
      />

      <ReactPlayer
        url="https://www.youtube.com/watch?v=mX1SgwsDNS8&t=20s"
        width="25vw"
        height="auto"
      />

      <h3>Meme music production</h3>
      <h4>
        Listen to parody music for{" "}
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

      <br />
      <ul>
        <li>
          <a href="https://youtube.com/c/johnbartmannmusic" target="_blank">
            YouTube
          </a>
        </li>
        <li>
          <a
            href="https://freemusicarchive.org/music/John_Bartmann/"
            target="_blank"
          >
            Free Music Archive
          </a>
        </li>
        <li>
          <a
            href="https://open.spotify.com/artist/3ZkQ69zxOePFLOGLj0N15C"
            target="_blank"
          >
            Spotify
          </a>
        </li>
        <li>
          <a
            href="https://music.apple.com/us/artist/john-bartmann/1081298778"
            target="_blank"
          >
            Apple Music
          </a>
        </li>
        <li>
          <a
            href="https://music.amazon.com/artists/B071YYY529/john-bartmann"
            target="_blank"
          >
            Amazon Music
          </a>
        </li>
        <li>
          <a href="https://johnbartmann.bandcamp.com" target="_blank">
            Bandcamp
          </a>
        </li>
        <li>
          <a href="https://soundcloud.com/johnbartmannmusic/" target="_blank">
            Soundcloud
          </a>
        </li>
      </ul>
      <a
        href="https://docs.google.com/spreadsheets/d/1lSEnqwGfV7shU5GsO8Cf6FSbFAf73gCFOlyzhbLuamo/edit#gid=1537321504"
        target="_blank"
      >
        <i>View all tracks metadata</i>
      </a>
      <br />
      <br />
      <h2>Commercial music production</h2>
      <br />
      <ul>
        <li>
          <a
            href="https://dnamusik.sourceaudio.com/album/3646849."
            target="_blank"
          >
            DNA Muzik (Munich) - library music
          </a>
        </li>
      </ul>
      <br />
      <h2>Live performance aliases</h2>
      <br />
      <ul>
        <li>
          <a href="https://getjohnnyjazz.com/" target="_blank">
            JohnnyJazz - electronic jazz outfit
          </a>
        </li>
        <li>
          <a href="https://pravdaofficial.com" target="_blank">
            Pravda - original lyrical songwriting
          </a>
        </li>
        <li>
          <a
            href="https://www.capetownswing.co.za/the-pebble-shakers/"
            target="_blank"
          >
            The Pebble Shakers - South African jazz
          </a>
        </li>
        <li>
          <a href="https://thegreatgatsbys.com" target="_blank">
            The Great Gatsbys - swing jazz
          </a>
        </li>
        <li>
          <a href="https://dukesofnote.com/" target="_blank">
            The Dukes of Note - carnival rock
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Music;
