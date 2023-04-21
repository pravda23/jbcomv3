import Player from "./Player.component";

const Home = (props) => {
  return (
    <div className="hero-title">
      <h1>Let your work speak for you.</h1>
      <Player currentTrack={props.currentTrack} />
    </div>
  );
};

export default Home;
