import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/styles.css";
import Header from "./components/Header";
import Home from "./routes/Home";
import Rate from "./routes/Rate";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/rate" element={<Rate />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
