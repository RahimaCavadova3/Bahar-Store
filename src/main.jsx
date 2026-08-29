import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import DataContext from "./Components/context/DataContext.jsx";
import BasketContext from "./Components/context/BasketContext.jsx";
import FavoritesContext from "./Components/context/FavoritesContext.jsx";

createRoot(document.getElementById("root")).render(
  <DataContext>
    <BasketContext>
      <FavoritesContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FavoritesContext>
    </BasketContext>
  </DataContext>,
);
