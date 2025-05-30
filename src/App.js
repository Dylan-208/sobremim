import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Inicio from "./pag/Inicio";
import SobreMim from "./pag/SobreMim";
import NotFound from "./pag/404";
import Menu from "./components/Menu";
import Rodape from "components/Rodape";
import PaginaPadrao from "components/PaginaPadrao";
import Post from "components/Post";
import ScrollToTop from "components/ScrollToTop";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>
        <Route path="/posts/:id/*" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default App;
