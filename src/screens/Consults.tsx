import { Link } from "react-router-dom";
import { Cbutton } from "../components/Cbutton";
import { Header } from "../components/Header";
import { Ctable } from "../components/Ctable";
import { PlusCircle } from "phosphor-react";

export function Consults(){
    const icon = <PlusCircle size={18} className="mr-1" color="#fafafa" />
    return (
    <div>
        <Header/>

        <div className=" flex-1 flex flex-col px-4">
            <h1 className="text-center font-bold text-3xl">Tabela de consultas</h1>

        <Link to={'/createConsult'}>
        <Cbutton icon={icon} title="Criar Consulta"/>
        </Link>

        <Ctable/>

        </div>
        
    </div>
    );
}