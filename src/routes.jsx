import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Coletas from "./pages/Coletas";
import Clientes from "./pages/Clientes";
import Page404 from "./pages/Page404";
import Materiais from "./pages/Materiais";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Saida from "./pages/Saida";
import HistoricoColetas from "./pages/HistoricoColetas";
import HistoricoSaidas from "./pages/HistoricoSaidas"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/sobre" element={<Sobre />}></Route>
        <Route path="/coletas" element={<Coletas />}></Route>
        <Route path="/clientes" element={<Clientes />}></Route>
        <Route path="/materiais" element={<Materiais />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/Saida" element={<Saida />}></Route>
        <Route path="*" element={<Page404 />}></Route>
        <Route path="/historico-coletas" element={<HistoricoColetas />}></Route>
        <Route path="/historico-saidas" element={<HistoricoSaidas />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
