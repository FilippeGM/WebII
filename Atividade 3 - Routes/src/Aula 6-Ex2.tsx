import { createContext, useContext, useState } from "react";
import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router";
export default function App() {
      return (
            <LoginProvider>
                  <BrowserRouter>
                        <Menu />
                        <Rotas />
                  </BrowserRouter>
            </LoginProvider>
      );
}

function Rotas() {
      const { logado } = useLogado();
      return logado ? <RotasLogado /> : <RotasDeslogado />;
}

function RotasLogado() {
      return (
            <Routes>
                  <Route path="*" element={<Erro />} />
                  <Route path="/Legume" element={<Legume />} />
                  <Route path="/verdura" element={<Verdura />} />
                  <Route path="/fruta" element={<Fruta />} />
            </Routes>
      );
}

function RotasDeslogado() {
      return (
            <Routes>
                  <Route path="*" element={<Erro />} />
                  <Route path="/carro" element={<Carro />} />
                  <Route path="/moto" element={<Moto />} />
            </Routes>
      );
}

function Menu() {
      const { logado, setLogado } = useLogado();
      return (
            <div>
                  <button onClick={() => setLogado(!logado)}>
                        {logado ? "Logout" : "Login"}
                  </button>
                  <Link to="/legume">Legume </Link>
                  <Link to="/verdura">Verdura </Link>
                  <Link to="/fruta">Fruta</Link>
                  <Link to="/carro"> Carro</Link>
                  <Link to="/moto"> Moto</Link>
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

function Carro() {
      return (
            <div style={{ backgroundColor: "LightSkyBlue" }}>
                  <div>Gol</div>
                  <div>Uno</div>
            </div>
      );
}
function Moto() {
      return (
            <div style={{ backgroundColor: "Wheat" }}>
                  <div>CG160</div>
                  <div>DT180</div>
            </div>
      );
}

function Erro() {
      const navigate = useNavigate();
      return <div>
            <h3>Rota inexistente</h3>
            <button onClick={() =>navigate("/legume")}>Legume</button>
      </div>;
}

interface ContextProps {
      logado: boolean;
      setLogado: (value: boolean) => void;
}
interface ChildrenProps {
      children: React.ReactNode;
}
const LoginContext = createContext<ContextProps | null>(null);
function LoginProvider({ children }: ChildrenProps) {
      const [logado, setLogado] = useState(false);
      return (<LoginContext.Provider value={{ logado, setLogado }}>
            {children}
      </LoginContext.Provider>
      );
}
function useLogado() {
      const context = useContext(LoginContext);
      if (!context) {
            throw new Error("useLogado deve ser usado dentro de um LoginProvider");
      }
      return context;
}