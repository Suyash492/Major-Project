import React, { useState, useEffect } from "react";
import Header from "./Header";
import { firestore, auth } from "../firebase";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import "firebase/database";
import "firebase/firestore";
import db from "../firebase";

function RankingSection() {
  const [score, setScore] = useState(0);
  const [rank, setRank] = useState("");
  // const [name, setName] = useState("");
  const [customerName, setCustomerName] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "customersData"),
      (querySnapshot) => {
        const names = [];
        querySnapshot.forEach((doc) => {
          names.push({ id: doc.id, ...doc.data() });
        });
        if (names.length > 0) {
          setCustomerName(names[0].name);
        }
      }
    );
    return () => {
      unsubscribe();
    };
  }, []);

  const updateRank = () => {
    if (score <= 5) {
      setRank("Beginner");
    } else if (score <= 10) {
      setRank("Intermediate");
    } else {
      setRank("Advanced");
    }
  };

  const solveProblem = (difficulty) => {
    let points = 0;
    if (difficulty === "Easy") {
      points = 1;
    } else if (difficulty === "Medium") {
      points = 2;
    } else if (difficulty === "Hard") {
      points = 3;
    }
    setScore(score + points);
    updateRank();
  };

  return (
    <section className="">
      <Header></Header>
      <h2 className="text-2xl font-bold mb-4 mt-10 text-center">Profile</h2>
      <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile Picture"
          className="rounded-full w-24 h-24 mb-2"
        />
        {/* <h3 className="text-lg font-bold">Enter Your Name</h3> */}
        <input
          className="text-lg font-bold text-center"
          type="text"
          placeholder="Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />

        <div className="text-gray-500">College Name</div>
        <div className="text-gray-500">Degree</div>
        <div className="mt-4 mb-2">
          Score <span className="text-lg font-bold">{score}</span>
        </div>
        <div className="mb-4">
          Rank: <span className="text-lg font-bold">{rank}</span>
        </div>

        <button
          onClick={() => solveProblem("Easy")}
          className="rounded-lg px-10 py-2 bg-green-500 text-white font-bold "
        >
          Solved (Easy)
        </button>
        <button
          onClick={() => solveProblem("Medium")}
          className="rounded-lg px-7 py-2 bg-yellow-500 text-white font-bold m-1"
        >
          Solved (Medium)
        </button>
        <button
          onClick={() => solveProblem("Hard")}
          className="rounded-lg px-10 py-2 bg-red-500 text-white font-bold"
        >
          Solved (Hard)
        </button>
      </div>
    </section>
  );
}

export default RankingSection;
