import { CepProps, ErrorProps} from "../types";
import api from "./api";

export async function getCep(numero:string):Promise<CepProps| ErrorProps>{
    try{
        const {data} = await api.get<CepProps | ErrorProps>(`${numero}/json`);
        return data;
    } catch (e:unknown){
        if(e instanceof Error) {
            return {erro:e.message};
        }
        return {erro:"Erro desconhecido"};
    }
}