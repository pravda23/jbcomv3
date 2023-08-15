import "../styles/App.styles.scss";
import { useRef } from "react";
import { Link } from "react-router-dom";

import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const Navbar = () => {
  const leftChevron = useRef(null);
  const rightChevron = useRef(null);
  function goLeft() {
    leftChevron.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
    console.log(leftChevron.current);
  }
  function goRight() {
    console.log("move right");
    rightChevron.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  return (
    <div className="navbar-container">
      <div className="navbar-chevron-left" onClick={goLeft}>
        <BsFillArrowLeftCircleFill size={20} opacity={0.3} />
      </div>
      <div className="navbar">
        <div className="navbar-scroll-anchor-left" ref={leftChevron}></div>
        <div className="navbar-links-container">
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
          <Link to="/contact">
            {" "}
            <h1 className="btn-nav">CONTACT</h1>
          </Link>
          <Link to="/contact">
            {" "}
            <h1 className="btn-nav">CONTACT</h1>
          </Link>
          <Link to="/contact">
            {" "}
            <h1 className="btn-nav">CONTACT</h1>
          </Link>
          <Link to="/contact">
            {" "}
            <h1 className="btn-nav">CONTACT</h1>
          </Link>
        </div>
      </div>
      <div className="navbar-scroll-anchor-right"></div>
      <div
        className="navbar-chevron-right"
        ref={rightChevron}
        onClick={goRight}
      >
        <BsFillArrowRightCircleFill size={20} opacity={0.3} />
      </div>
    </div>
  );
};
export default Navbar;
