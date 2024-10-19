import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RestaurantDetail from "./components/RestaurantDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:id" element={<RestaurantDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
