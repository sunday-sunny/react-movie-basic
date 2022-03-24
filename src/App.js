import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/styles.css";
import Header from "./components/Header";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Genre from "./routes/Genre";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:genre" element={<Genre />}></Route>
        <Route path="/movie/:id" element={<Detail />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
