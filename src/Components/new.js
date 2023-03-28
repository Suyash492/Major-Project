// import React, { useState } from 'react';
// import './App.css';
// import ProblemSection from './components/ProblemSection';
// import RankingSection from './components/RankingSection';

// function App() {
//   const [easyProblemsSolved, setEasyProblemsSolved] = useState(0);
//   const [mediumProblemsSolved, setMediumProblemsSolved] = useState(0);
//   const [hardProblemsSolved, setHardProblemsSolved] = useState(0);

//   const getProblemScore = (difficulty) => {
//     switch(difficulty) {
//       case 'easy':
//         return 10;
//       case 'medium':
//         return 20;
//       case 'hard':
//         return 30;
//       default:
//         return 0;
//     }
//   }

//   const updateRanking = (difficulty) => {
//     const score = getProblemScore(difficulty);
//     switch(difficulty) {
//       case 'easy':
//         setEasyProblemsSolved(easyProblemsSolved + 1);
//         break;
//       case 'medium':
//         setMediumProblemsSolved(mediumProblemsSolved + 1);
//         break;
//       case 'hard':
//         setHardProblemsSolved(hardProblemsSolved + 1);
//         break;
//       default:
//         break;
//     }
//   }

//   return (
//     <div className="App">
//       <ProblemSection updateRanking={updateRanking} />
//       <RankingSection 
//         easyProblemsSolved={easyProblemsSolved} 
//         mediumProblemsSolved={mediumProblemsSolved} 
//         hardProblemsSolved={hardProblemsSolved} 
//       />
//     </div>
//   );
// }

// export default App;