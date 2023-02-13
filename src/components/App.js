import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import "../styles/App.styles.scss";
import { useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import Home from "./Home.component";
import Footer from "./Footer.component";
import Audio from "./Audio.component";
import Writing from "./Writing.component";
import Music from "./Music.component";
import Contact from "./Contact.component";

function App() {
  // const [volumeIcon, setVolumeIcon] = useState(false);
  // const [videoMuted, setVideoMuted] = useState("muted");

  // const vidUrl = "https://getjohnnyjazz.com/resources/jjvid.mp4";
  // const setVolumeOnClick = () => {
  //   setVolumeIcon(!volumeIcon);
  //   setVideoMuted(videoMuted == "muted" ? "" : "muted");
  // };

  return (
    <div className="content-container">
      <div class="overlay">
        <div className="app-container">
          {/* <video
          className="video"
          src={vidUrl}
          autoPlay
          loop
          muted={videoMuted}
        /> */}
          <div className="header-container">
            <h1>JOHN BARTMANN</h1>
            <h3>CONTENT CREATIVE</h3>
          </div>
          <BrowserRouter>
            {/* <Navbar /> */}
            <div className="navbar">
              <Link to="/">
                <h1 className="btn-nav">HOME</h1>
              </Link>
              <Link to="/writing">
                <h1 className="btn-nav">WRITING</h1>
              </Link>
              <Link to="/audio">
                {" "}
                <h1 className="btn-nav">AUDIO</h1>
              </Link>
              <Link to="/music">
                {" "}
                <h1 className="btn-nav">MUSIC</h1>
              </Link>
              <Link to="/contact">
                {" "}
                <h1 className="btn-nav">CONTACT</h1>
              </Link>
              {/* <div onClick={setVolumeOnClick} className="player-icon">
              {volumeIcon ? (
                <FaVolumeUp size="2rem" />
              ) : (
                <FaVolumeMute size="2rem" />
              )}
            </div> */}
            </div>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/writing" element={<Writing />} />
              <Route path="/audio" element={<Audio />} />
              <Route path="/music" element={<Music />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </BrowserRouter>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default App;
