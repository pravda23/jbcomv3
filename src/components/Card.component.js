import { GoLinkExternal } from "react-icons/go";
import ReactPlayer from "react-player";

const Card = (title, item, link, audioUrl, ytUrl) => {
  return (
    <div>
      <div className="card-container">
        <div className="card-title">
          <h3>{title}</h3>
          <h4>{item}</h4>
          <div>
            {audioUrl ? <audio controls src={audioUrl}></audio> : null}

            {ytUrl ? (
              <ReactPlayer url={ytUrl} width="18rem" height="auto" />
            ) : null}
          </div>
        </div>
        <a href={link} target="_blank" rel="noopener">
          <GoLinkExternal />
        </a>
      </div>
    </div>
  );
};

export default Card;
