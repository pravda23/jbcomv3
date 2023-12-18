import { GoLinkExternal } from "react-icons/go";
import ReactPlayer from "react-player";

const Card = (title, item, link, id) => {
  return (
    <div className="card-container" key={id}>
      <a href={link}>
        <div className="card-title">
          <h3>{title}</h3>
          <h4>{item}</h4>
        </div>
      </a>
      {/* <a href={link} target="_blank" rel="noopener">
          <GoLinkExternal />
        </a> */}
    </div>
  );
};

export default Card;
