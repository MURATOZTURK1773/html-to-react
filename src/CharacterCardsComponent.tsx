import CharacterCard from "./CharacterCard"; 
import data from "./fma-data";

const CharacterCards = () => (
  <section id="character-cards" className="character-cards">
    {data.map((character, index) => (
      <CharacterCard key={index} character={character} />
    ))}
  </section>
);

export default CharacterCards;
