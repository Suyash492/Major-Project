import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  
  return (
    <header className="bg-gray-900 text-white py-4 px-8 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Coding Platform</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            {/* <a href="#" className="hover:text-gray-300">
              Leaderboard
            </a> */} 
            <Link to ="/problem">Problems</Link>
          </li>
          <li>
            {/* <a href="#" className="hover:text-gray-300" >
              Profile
            </a> */}
            <Link to ="/profile">Profile</Link>
          </li>
          <li>
            {/* <a  className="hover:text-gray-300" >
              Problems
            </a> */}
            <Link to =""></Link>
          </li>
        </ul>
      </nav>
    </header>
    
  );
}

export default Header;
