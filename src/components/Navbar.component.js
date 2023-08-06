import "../styles/App.styles.scss";
import { useRef } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Navbar = () => {
  const leftChevron = useRef(null);
  const rightChevron = useRef(null);
  // const leftChevron = document.querySelector("navbar-chevron-left");
  // const rightChevron = document.querySelector("navbar-chevron-right");

  function goLeft() {
    console.log("go left");
    leftChevron.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }
  function goRight() {
    console.log("go right");
    rightChevron.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  // leftChevron.addEventListener("click", goRight);
  // rightChevron.addEventListener("click", goLeft);

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div
          className="navbar-chevron-left"
          ref={leftChevron}
          onClick={goRight}
        >
          &lsaquo;
        </div>
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
        <div
          className="navbar-chevron-right"
          ref={rightChevron}
          onClick={goLeft}
        >
          &rsaquo;
        </div>
      </div>
    </div>
  );
};
export default Navbar;
