import React from "react";
import data from "./fma-data";
import "./reset.css";
import "./header.css";
import "./character-cards.css";
import "./character-ratings.css";
import CharacterCards from "./CharacterCardsComponent";

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
  const topCharacters = data.sort((a, b) => b.votes - a.votes).slice(0, 5);

  return (
    <section id="character-ratings" className="character-ratings">
      <h4>Top Characters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Skillset</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {topCharacters.map((character, index) => (
            <tr key={index} className={index % 2 === 0 ? "dark" : "light"}>
              <td>{character.name}</td>
              <td>{character.skillset.join(", ")}</td>
              <td>{character.votes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default App;

// import data from "./fma-data";
// import CharacterCards from "./CharacterCardsComponent";
// import "./reset.css";
// import "./header.css";
// import "./character-cards.css";
// import "./character-ratings.css";

// const App = () => {
//   const topCharacters = data.sort((a, b) => b.votes - a.votes).slice(0, 5);

//   return (
//     <>
//       <header className="header">
//         <h1>Fullmetal Alchemist</h1>
//         <nav>
//           <li>about us</li>
//           <li>info</li>
//           <li>support us</li>
//         </nav>
//       </header>

//       <section id="character-ratings" className="character-ratings">
//         <h4>Top Characters</h4>
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Skillset</th>
//               <th>Votes</th>
//             </tr>
//           </thead>
//           <tbody>
//             {topCharacters.map((character, index) => (
//               <tr key={index} className={index % 2 === 0 ? "dark" : "light"}>
//                 <td>{character.name}</td>
//                 <td>{character.skillset.join(", ")}</td>
//                 <td>{character.votes}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </section>

//       <CharacterCards data={data} />
//     </>
//   );
// };

// export default App;
