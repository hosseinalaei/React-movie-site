import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Layout/Header";
import HomePage from "./pages/home";
import CategoriesPage from "./pages/categories";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
