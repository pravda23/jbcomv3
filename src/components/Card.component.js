import { GoLinkExternal } from "react-icons/go";
const Card = (title, item, link) => {
  return (
    <div>
      <div className="card-container">
        <div className="card-title">
          <h3>{title}</h3>
          <h4>{item}</h4>
        </div>
        <div classname="card-button"></div>
        <a href={link} target="_blank" rel="noopener">
          <GoLinkExternal />
        </a>
      </div>
    </div>
  );
};

export default Card;
