import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router";
export default function App() {
      return (
            <BrowserRouter>
                  <Menu />
                  <Rotas />
            </BrowserRouter>
      );
}

function Rotas() {
      return (
            <Routes>
                  <Route path="*" element={<Erro />} />
                  <Route path="/Legume" element={<Legume />} />
                  <Route path="/verdura" element={<Verdura />} />
                  <Route path="/fruta" element={<Fruta />} />
            </Routes>
      );
}

function Menu() {
      return (
            <div>
                  <Link to="/legume">Legume </Link>
                  <Link to="/verdura">Verdura </Link>
                  <Link to="/fruta">Fruta</Link>
            </div>
      );
}

function Legume() {
      return (
            <div style={{ backgroundColor: "PeachPuff" }}>
                  <div>Beterraba</div>
                  <div>Cenoura</div>
            </div>
      );
}

function Verdura() {
      return (
            <div style={{ backgroundColor: "palegreen" }}>
                  <div>Alface</div>
                  <div>Couve</div>
            </div>
      );
}

function Fruta() {
      return (
            <div style={{ backgroundColor: "LemonChiffon" }}>
                  <div>Laranja</div>
                  <div>Manga</div>
            </div>
      );
}

function Erro() {
      const navigate = useNavigate();
      return <div>
                  <h3>Rota inexistente</h3>
                  <button onClick={() => navigate("/legume")}>Legume</button>
            </div>;
}