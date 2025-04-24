import { createContext, useContext, useState } from "react";
import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router";
export default function App() {
      return (
            <PersonProvider>
                  <BrowserRouter>
                        <Menu />
                        <Rotas />
                  </BrowserRouter>
            </PersonProvider>
      );
}

function Rotas() {
      return <Routes>
            <Route path="/">
                  <Route index element={<Form/>}/>
                  <Route path="*" element={<Erro />} />
                  <Route path="form" element={<Form />} />
                  <Route path="list" element={<List />} />
            </Route>
      </Routes>;
}

function Menu() {
      return (
            <div>
                  <Link to="/form">Formulario </Link>
                  <Link to="/list">Lista </Link>
            </div>
      );
}

function Erro() {
      const navigate = useNavigate();
      return <div>
            <h3>Rota inexistente</h3>
            <button onClick={() => navigate("/form")}>Formulario</button>
      </div>;
}

function Form() {
      const [name, setName] = useState("");
      const [age, setAge] = useState("");
      const { add } = usePerson();
      return (
            <div>
                  <div>
                        <label htmlFor="name">Nome</label>
                        <input id="name" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div>
                        <label htmlFor="age">Idade</label>
                        <input id="age" value={age} onChange={(e) => setAge(e.target.value)} />
                  </div>
                  <div>
                        <button onClick={() => add({ name, age })}>Salvar</button>
                  </div>
                  <br /><Link to="/list">Voltar para lista;</Link>
            </div>
      );
}
function List() {
      const { list } = usePerson();
      return (
            <>
                  <div>
                        <p>Cadastro:</p>
                        <ol>
                              {
                                    list.map((item, index) => <li key={index}>{item.name} - {item.age}</li>)
                              }
                        </ol>
                  </div>
                  <br /><Link to="/form">Voltar para o formulario;</Link>
            </>
      );
}
interface Person {
      name: string;
      age: string;
}
interface ContextProps {
      list: Person[];
      add: (person: Person) => void;
}
interface ChildrenProps {
      children: React.ReactNode;
}
const PersonContext = createContext<ContextProps | null>(null);
function PersonProvider({ children }: ChildrenProps) {
      const [list, setList] = useState<Person[]>([]);
      function add(person: Person) {
            setList((prev) => [...prev, person]);
      }
      return (
            <PersonContext.Provider value={{ list, add }}>
                  {children}
            </PersonContext.Provider>
      );
}
function usePerson() {
      const context = useContext(PersonContext);
      if (!context) {
            throw new Error("usePerson deve ser usado dentro de um PersonProvider");
      }
      return context;
}