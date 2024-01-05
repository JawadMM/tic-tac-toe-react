import React from "react";
import { useState } from "react";

const Player = ({ initialName, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    setIsEditing((editing) => !editing); //function form to make sure React gets the latest state
  }

  function handleChange(event) {
    //console.log(event);
    const name = event.target.value;
    setPlayerName(name);
  }

  let playerNameContainer = <span className="player-name">{playerName}</span>; // Two way binding: getting a value out of an input and feeding it back to it
  let buttonCaption = "edit";

  if (isEditing) {
    playerNameContainer = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleChange}
      ></input>
    );
    buttonCaption = "Save";
  }

  return (
    <li>
      <span className="player">
        {playerNameContainer}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{buttonCaption}</button>
    </li>
  );
};

export default Player;
