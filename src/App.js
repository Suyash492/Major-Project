import "./App.css";
import Problem from "./Components/Problem";
import Header from "./Components/Header";
// import RankingSection from "./Components/Rankingsection";
import RankingSection from "./Components/Rankingsection";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProfileSection from "./Components/ProfileSection";
import Compiler from "./Components/compiler";
// import ProfileSection from "./Components/auth/Rankingsection";

import Board from "./Components/board";
import "./Components/style.css";
import SignIn from "./Components/auth/SignIn";
import SignUp from "./Components/auth/SignUp";
import AuthDetails from "./Components/auth/AuthDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index Component={SignIn} />
          <Route path="/problem" Component={Problem} />
          <Route path="/profile" Component={RankingSection} />
          <Route path="/leaderboard" Component={Board} />
          <Route path="/authdetails" Component={AuthDetails} />
          <Route path="/compiler" Component={Compiler} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
export default App;
