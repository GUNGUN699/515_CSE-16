// function App() {
//   let name = "CSE16";
//   let year = 2026;
//   return (
//     <div>
//       <h1>HELLO WORLD!</h1>
//       <p style= {{color:'blue', fontWeight: 'bold', textAlign: 'center'}}>This is my first react App in CSE-16</p>
//       <p>2*2 = {2 * 2}</p>
//       <p>My section is {name} and my batch is {year}</p>
//     </div>

//   );
// }
//     export default App;
// function App() {
//   return (
//     <div style={{backgroundColor : 'lightgreen'}}>
//       <h1>My favourite nature gallery</h1>

//     </div>


//   );
// }
// export default App;

import {useState} from 'react' ;
function App() {
  const[score, setScore]=useState(0);
  return (
    <div> 
      <h1>Welcome to the Game Zone</h1>
      <h2>Current Score: {score}</h2>
      <button onClick={() => setScore(score + 1)}>
        Increase Score
      </button>
      <button onClick={() => setScore(score - 1)}>
        Decrease Score
      </button>
      <button onClick={() => setScore(0)}>
        Reset Score
      </button>
    </div>

  );
}
export default App;