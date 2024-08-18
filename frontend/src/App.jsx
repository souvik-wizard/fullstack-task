import { Route, Routes } from "react-router-dom";
import NotFound from "./components/ErrorPage";
import { Layout } from "./Layout";
import Home from "./pages/Home";
import SingleCard from "./pages/SingleCardDetails";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cards/:title" element={<SingleCard />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
