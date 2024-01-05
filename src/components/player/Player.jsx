import React from "react";
import { useState } from "react";

const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);

  function editingHandler() {
    setIsEditing(!isEditing);
  }

  let playerName =<span className="player-name">{name}</span>;

  if (isEditing) {
    playerName = <input type="text" required></input>
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editingHandler}>Edit</button>
    </li>
  );
};

export default Player;
