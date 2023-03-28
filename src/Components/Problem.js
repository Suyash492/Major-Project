import React, { useState } from 'react';
import Header from './Header';


function Problem() {
  const [solvedProblems, setSolvedProblems] = useState([]);
  const [sortBy, setSortBy] = useState('All');

  const problems = [
    {
      id: 1,
      title: 'Two Sum',
      difficulty: 'Easy',
      description: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target.',
      link: 'https://leetcode.com/problems/two-sum/',
      score: 5
    },
    {
      id: 2,
      title: 'Reverse String',
      difficulty: 'Easy',
      description: 'Write a function that reverses a string. The input string is given as an array of characters char[].',
      link: 'https://leetcode.com/problems/reverse-string/',
      score: 5
    },
    {
      id: 3,
      title: 'Longest Substring Without Repeating Characters',
      difficulty: 'Medium',
      description: 'Given a string, find the length of the longest substring without repeating characters.',
      link: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/'
    },
    {
      id: 4,
      title: 'Median of Two Sorted Arrays',
      difficulty: 'Hard',
      description: 'Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.',
      link: 'https://leetcode.com/problems/median-of-two-sorted-arrays/'
    },
  ];

  const difficulties = ['All', 'Easy', 'Medium', 'Hard'];

  const isProblemSolved = (problemId) => {
    return solvedProblems.includes(problemId);
  };

  const toggleProblemSolved = (problemId) => {
    if (isProblemSolved(problemId)) {
      setSolvedProblems(solvedProblems.filter(id => id !== problemId));
    } else {
      setSolvedProblems([...solvedProblems, problemId]);
    }
  };

  const filteredProblems = sortBy === 'All' ? problems : problems.filter(problem => problem.difficulty === sortBy);

  return (
    
    <section className=" ">
      <Header></Header>

      <h2 className="text-2xl font-bold mb-4 mt-10 text-center">Coding Problems</h2>
      <nav className="mb-4">
        <ul className="flex space-x-4">
          {difficulties.map(difficulty => (
            <li key={difficulty}>
              <button onClick={() => setSortBy(difficulty)} className={`rounded-lg px-4 py-2 font-bold ${sortBy === difficulty ? 'bg-gray-700 text-white' : 'bg-white text-gray-700 border border-gray-400'}`}>{difficulty}</button>
            </li>
          ))}
        </ul>
      </nav>
      <ul className="space-y-4">
        {filteredProblems.map(problem => (
          <li key={problem.id}>
            <div className={`bg-${isProblemSolved(problem.id) ? 'green' : 'white'} rounded-lg shadow-md p-4 flex justify-between items-center`}>
              <div>
                <h3 className="text-lg font-bold " >{problem.title}</h3>
                <div className="text-gray-500">{problem.difficulty}</div>
                <p className="mt-2">{problem.description}</p>
                <a href={problem.link} target="_blank" rel="noopener noreferrer" className="mt-2 block ">View Problem &rarr;</a>
              </div>
              <button onClick={() => toggleProblemSolved(problem.id)} className={`ml-4 rounded-lg px-4 py-2 text-white font-bold ${isProblemSolved(problem.id) ? 'bg-green-500' : 'bg-gray-700'}`}>
                {isProblemSolved(problem.id) ? 'Solved' : 'Not Solved'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Problem;


            //   <button onClick={() => toggleProblemSolved(problem.id)} className={`ml-4 rounded-lg px-4 py-2 text-white font-bold ${isProblem

