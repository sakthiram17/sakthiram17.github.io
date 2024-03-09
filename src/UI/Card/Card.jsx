import React from "react";
import "./Card.css";

const Card = (props) => {
  let image = null;
  if (props.type === "simple") {
    return <div className="Card">{props.children}</div>;
  }
  if (props.imgsrc) {
    image = <img className="CardImage" src={props.imgsrc} alt="Card Image" />;
  }

  return (
    <a href = {props.link}>
    <div className={`Card ${props.pos === 1 ? "" : "new-bg"}`}>
      <div className="CardHeader">{props.header}</div>
        <div className="card-content">
        {props.pos === 1 ? (
          <>
            {image}
            <div className="card-text">{props.para}</div>
                
          </>
        ) : (
          <>
                {image}
            <p className="card-text">{props.para}</p>
          </>
        )}
      </div>
    </div>
    </a>
  );
};

export default Card;