import React, { useState } from 'react';

function RankingSection() {
  const [score, setScore] = useState(0);
  const [rank, setRank] = useState('');

  const updateRank = () => {
    if (score <= 5) {
      setRank('Beginner');
    } else if (score <= 10) {
      setRank('Intermediate');
    } else {
      setRank('Advanced');
    }
  };

  const solveProblem = (difficulty) => {
    let points = 0;
    if (difficulty === 'Easy') {
      points = 1;
    } else if (difficulty === 'Medium') {
      points = 2;
    } else if (difficulty === 'Hard') {
      points = 3;
    }
    setScore(score + points);
    updateRank();
  };

  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-4 ml-8">Profile</h2>
      <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
        <img src="https://via.placeholder.com/150" alt="Profile Picture" className="rounded-full w-24 h-24 mb-2" />
        <h3 className="text-lg font-bold">Suyash Bagul</h3>
        <div className="text-gray-500">College Name</div>
        <div className="text-gray-500">Degree</div>
        <div className="mt-4 mb-2">
        Score <span className="text-lg font-bold">{score}</span> 
        </div>
        <div className="mb-4">
          Rank: <span className="text-lg font-bold">{rank}</span>
        </div>
        {/* <div> */}
        <button onClick={() => solveProblem('Easy')} className="rounded-lg px-10  py-2 bg-green-500 text-white font-bold ">Solved (Easy)</button>
        <button onClick={() => solveProblem('Medium')} className="rounded-lg px-7 py-2 bg-yellow-500 text-white font-bold m-1">Solved (Medium)</button>
        <button onClick={() => solveProblem('Hard')} className="rounded-lg px-10 py-2 bg-red-500 text-white font-bold">Solved (Hard)</button>
        {/* </div> */}
      </div>
    </section>
  );
}

export default RankingSection;

// import React, { useState } from "react";

// const RankingSection = ({ name, profilePic, college, degree }) => {
//   const [score, setScore] = useState(0);

//   const handleSolved = (problemScore) => {
//     setScore(score + problemScore);
//   };

//   return (
//     <div>
//       <h2>Ranking</h2>
//       <img src={profilePic} alt="Profile Pic" />
//       <h3>{name}</h3>
//       <p>College: {college}</p>
//       <p>Degree: {degree}</p>
//       <p>Score: {score}</p>
//     </div>
//   );
// };

// export default RankingSection;

