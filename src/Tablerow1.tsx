import React from 'react';

interface Character {
  name: string;
  skillset: string[];
  votes: number;
}

interface CharacterTableRowProps {
  character: Character;
  rowKey: number;
}

const CharacterTableRow: React.FC<CharacterTableRowProps> = ({ character, rowKey }) => {
  const rowClassName = rowKey % 2 === 0 ? "dark" : "light";

  return (
    <tr key={rowKey} className={rowClassName}>
      <td>{character.name}</td>
      <td>{character.skillset.join(", ")}</td>
      <td>{character.votes}</td>
    </tr>
  );
};

export default CharacterTableRow;

