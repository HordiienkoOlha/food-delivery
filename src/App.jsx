import { Routes, Route } from "react-router-dom";

import AppBarComponent from "@components/AppBarComponent/AppBarComponent";
import CartView from "@views/CartView";
import HomeView from "@views/HomeView";
import NotFoundView from "@views/NotFoundView";

function App() {
  return (
    <>
      <AppBarComponent />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="cart" element={<CartView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </>
  );
}

export default App;
