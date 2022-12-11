import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Home from "./pages/Home";
import TCS from "./pages/Tcs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/tcs" element={<TCS />} />
      </Routes>
    </Router>
  );
}

export default App;
