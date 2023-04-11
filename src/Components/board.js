import React, { useState } from "react";
import Profiles from "./profiles";
import { Leaderboard } from "./database";
import Header from "./Header";

export default function Board() {
  const [period, setPeriod] = useState(0);

  const handleClick = (e) => {
    setPeriod(e.target.dataset.id);
  };
  return (
    <div className="board ">
      <Header></Header>

      <h1 className="leaderboard text-2xl font-bold mb-4 mt-10 text-center">
        Leaderboard
      </h1>

      <div className="duration text-center m-5 flex justify-center gap-1">
        <button onClick={handleClick} data-id="7" className="p-2 ">
          7 Days
        </button>
        <button onClick={handleClick} data-id="30" className="p-2">
          30 Days
        </button>
        <button onClick={handleClick} data-id="0" className="p-2">
          All-Time
        </button>
      </div>
      <div className="">
        <Profiles Leaderboard={between(Leaderboard, period)}></Profiles>
      </div>
    </div>
  );
}

function between(data, between) {
  const today = new Date();
  const previous = new Date(today);
  previous.setDate(previous.getDate() - (between + 1));

  let filter = data.filter((val) => {
    let userDate = new Date(val.dt);
    if (between == 0) return val;
    return previous <= userDate && today >= userDate;
  });

  // sort with asending order
  return filter.sort((a, b) => {
    if (a.score === b.score) {
      return b.score - a.score;
    } else {
      return b.score - a.score;
    }
  });
}
