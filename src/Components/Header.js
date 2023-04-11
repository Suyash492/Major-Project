import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 px-8 flex justify-between items-center">
      <Link className="text-2xl font-bold" to="/authdetails">
        {" "}
        Coding Platform
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/problem">Problems</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/leaderboard">Leaderboard</Link>
          </li>
          <li>
            <Link to="/compiler">Compiler</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
