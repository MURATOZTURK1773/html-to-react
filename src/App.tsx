import React from "react";
import data from "./fma-data";
import "./reset.css";
import "./header.css";
import "./character-cards.css";
import "./character-ratings.css";
import CharacterCards from "./CharacterCardsComponent";
import CharacterTableRow from "./Tablerow";
import TableHeaderRow from "./TableHeaderRow";

class App extends React.Component {
  render() {
    return (
      <>
        <header className="header">
          <h1>Fullmetal Alchemist</h1>
          <nav>
            <li>about us</li>
            <li>info</li>
            <li>support us</li>
          </nav>
        </header>

        <CharacterRatings />
        <CharacterCards />
      </>
    );
  }
}

function CharacterRatings() {
  const topCharacters = structuredClone(data)
    .sort((a, b) => b.votes - a.votes)
    .slice(0, 5);

  return (
    <section id="character-ratings" className="character-ratings">
      <h4>Top Characters</h4>
      <table>
        <thead>
        <TableHeaderRow/>
        </thead>
        <tbody>
          {topCharacters.map((character, index) => (
            <CharacterTableRow rowKey={index} character={character} />
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default App;
