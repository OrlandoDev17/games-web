import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
// Pages
import App from "./App.jsx";
import Auth from "./pages/Auth.jsx";
import Catalogue from "./pages/Catalogue.jsx";
import Favorites from "./pages/Favorites.jsx";
// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// Styles
import "./styles/Index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/catalogue" element={<Catalogue />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
