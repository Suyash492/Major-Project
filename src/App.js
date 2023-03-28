import "./App.css";
import Problem from "./Components/Problem";
import Header from "./Components/Header";
import RankingSection from "./Components/Rankingsection";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import ProfileSection from "./Components/ProfileSection";

function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route >
          <Route  path="" Component={Header}/>
            <Route path="/problem" Component={Problem} />
            <Route path="/profile" Component={RankingSection} />
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
export default App;
