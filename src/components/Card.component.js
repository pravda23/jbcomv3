const Card = (title, item, link) => {
  return (
    <div>
      <div className="card-container">
        <h3>{title}</h3>
        <h4>
          <a href={link} target="_blank" rel="noopener">
            {item}
          </a>
        </h4>
      </div>
    </div>
  );
};

export default Card;
