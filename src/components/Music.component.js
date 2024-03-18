import { useState } from "react";
import AudioWaveform from "./AudioWaveform.component.js";
import musicTracks from "./musicTracks.json";

const Music = () => {
  const [currentFile, setCurrentFile] = useState();
  const [isPlaying, setIsPlaying] = useState(false);

  const clickHandle = (e) => {
    setCurrentFile(e);
    setIsPlaying(true);
  };

  const updateTracks = () => {
    const imgpath = "https:/johnbartmann.com/track-image/800/";
    const album_slug = [
      "public-domain-soundtrack-music.jpg",
      "royalty-free-soundtrack-music.jpg",
      "making-soundtracks-is-easy.jpg",
      "audio-drama-soundtracks.jpg",
      "straylight-drones.jpg",
      "softly-boldly-with-a-piano.jpg",
      "90s-tv-sitcom-themes.jpg",
      "underwater-wonders.jpg",
      "beachy-beachbox-ukulele.jpg",
      "happy-trappy.jpg",
      "picnic-on-the-seine.jpg",
      "sounds-like-a-dad-band.jpg",
      "lofi-xmas-sludge.jpg",
      "hot-equatorial-night.jpg",
      "chinese-valentine.jpg",
      "robot-space-rock.jpg",
      "lime-green-assets.jpg",
      "western-skies.jpg",
      "machine-learning.jpg",
      "eurodisco-party-heaven.jpg",
      "hide-and-sneak.jpg",
      "the-moflippin-channel.jpg",
      "90s-sitcom-themes.jpg",
    ];

    const album_slug_unpublished = [
      "free-stuff.jpg",
      "moody-beats.jpg",
      "retro-boogie.jpg",
      "soft-solo-piano.jpg",
    ];

    let count = 0;
    musicTracks.forEach((t) => {
      // add album title and image

      delete t.albumTitle;
      delete t.img_full;
      delete t.img_thumb;
      let albumIndex;

      let key = t.key;

      switch (true) {
        case key <= count + 20:
          albumIndex = 0;
          break;
        case key <= count + 38:
          albumIndex = 1;
          break;
        case key <= 57:
          albumIndex = 2;
          break;
        case key <= 76:
          albumIndex = 2;
          break;
      }
      t.albumTitle = album_slug[albumIndex];
    });
  };

  updateTracks();
  console.log(musicTracks[20].albumTitle);
  console.log(musicTracks[21].albumTitle);
  console.log(musicTracks[38].albumTitle);
  console.log(musicTracks[39].albumTitle);
  console.log(musicTracks[76].albumTitle);
  console.log(musicTracks[78].albumTitle);
  console.log(musicTracks);

  return (
    <div>
      <h1 className="center">MUSIC</h1>
      <p style={{ margin: 30 }}>
        Creative Commons music tracks and templates for everyone.{" "}
        <a href="/faq">View the FAQ</a> for license and download info.
      </p>
      <div className="audio-list-container">
        <AudioWaveform musicTracks={musicTracks} clickHandle={clickHandle} />
      </div>
    </div>
  );
};

export default Music;
