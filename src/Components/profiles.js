import React from "react";

export default function profiles({ Leaderboard }) {
  return <div id="profile">{Item(Leaderboard)}</div>;
}

function Item(data) {
  return (
    <>
      {data.map((value, index) => (
        <div className="flex " key={index}>
          <div className="items-center">
            <div className="item">
              <img src={value.img} alt="" />

              <div className="info">
                <h3 className="name text-dark">{value.name}</h3>
                <span>{value.batch}</span>
              </div>
            </div>
          </div>
          <div>
            <div className="item tex">
              <span>{value.score}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
