import React from "react";

const Cards = props => (
  <div className="card img-container">
    <img
      alt={props.name}
      src={props.image}
      id={props.id}
      onClick={() => props.shuffleScoreCard(props.id)}
      className="shuffleScore"
    />
  </div>
);

export default Cards;
