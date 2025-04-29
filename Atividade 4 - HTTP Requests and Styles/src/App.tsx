import {useState} from "react";
import {getCep} from "./services/cep";
import {CepProps, ErrorProps} from "./types";

export default function App(){
  const [entrada, setEntrada] = useState("");
  const [resposta, setResposta] = useState<CepProps|ErrorProps|null>(null);
  async function obter(){
    const res = await getCep(entrada);
    setResposta(res);
  }
  return (
    <>
      <div>
        <label htmlFor="cep">CEP</label>
        <input id="cep" value={entrada} onChange={(e)=> setEntrada(e.target.value)}/>
      </div>
      <div>
        <button onClick={obter}>Buscar</button>
      </div>
      {resposta && <div>{JSON.stringify(resposta)}</div>}
    </>
  );
}
