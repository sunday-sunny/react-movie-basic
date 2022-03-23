import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/styles.css";
import Header from "./components/Header";
import Home from "./routes/Home";
import Rate from "./routes/Rate";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/rate" element={<Rate />}></Route>
        <Route path="/movie/:id" element={<Detail />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
