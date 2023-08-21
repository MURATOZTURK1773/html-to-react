import React from "react";
import { Character } from "./fma-data";

const CharacterCard: React.FC<{ character: Character }> = ({ character }) => (
  <div className="card">
    <div className="card-titles">
      <h3>{character.name}</h3>
      {character.nickName && <h4>{character.nickName}</h4>}
    </div>
    <img src={character.imageUrl} alt={character.name} />
    <p>{character.background}</p>
  </div>
);

export default CharacterCard;
