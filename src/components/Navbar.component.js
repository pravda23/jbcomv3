import "../styles/App.styles.scss";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-chevrons">&lsaquo;</div>
      <div className="navbar">
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
      <div className="navbar-chevrons">&rsaquo;</div>
    </div>
  );
};
export default Navbar;
