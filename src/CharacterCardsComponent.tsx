import data from "./fma-data";

const CharacterCards = () => (
 
    <section id="character-cards" className="character-cards">
      {data.map((character, index) => (
        <div key={index} className="card">
          <div className="card-titles">
            <h3>{character.name}</h3>
            {character.nickName && <h4>{character.nickName}</h4>}
          </div>
          <img src={character.imageUrl} alt={character.name} />
          <p>{character.background}</p>
        </div>
      ))}
    </section>
  );


export default CharacterCards;