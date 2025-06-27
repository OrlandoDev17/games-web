import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
// Pages
import App from "./App.jsx";
import Auth from "./pages/Auth.jsx";
import Catalogue from "./pages/Catalogue.jsx";
import Favorites from "./pages/Favorites.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
    <Routes>
      <Route path="/auth" element={<Auth />} />
    </Routes>
    <Routes>
      <Route path="/catalogue" element={<Catalogue />} />
    </Routes>
    <Routes>
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  </BrowserRouter>
);
