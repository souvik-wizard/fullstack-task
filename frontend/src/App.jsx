import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import SingleCard from "./pages/SingleCardDetails";
import NotFound from "./components/ErrorPage";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Navigate to="/cards" />} />
        <Route path="/cards" element={<Home />} />
        <Route path="/cards/:title" element={<SingleCard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
