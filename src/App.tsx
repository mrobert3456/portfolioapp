import MainLayout from "./_components/layout/Mainlayout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Blogs from "./pages/Blogs";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  );
}

export default App;
