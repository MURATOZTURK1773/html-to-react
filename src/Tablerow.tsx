// // CharacterTableRow.tsx
// import React from 'react';

// interface CharacterTableRowProps {
//   character: {
//     name: string;
//     skillset: string[];
//     votes: number;
//   };
//   rowKey: number;
//   index: number;
// }

// const CharacterTableRow: React.FC<CharacterTableRowProps> = ({ character, rowKey ,index }) => {
//   const rowClassName = index % 2 === 0 ? "dark" : "light";

//   return (
//     <tr key={rowKey} className={rowClassName}>
//       <td>{character.name}</td>
//       <td>{character.skillset.join(", ")}</td>
//       <td>{character.votes}</td>
//     </tr>
//   );
// };

// export default CharacterTableRow;

// CharacterTableRow.tsx
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

