import { Autocomplete, TextField } from "@mui/material";
import { Header } from "../components/Header";
import { Input } from "../components/Input";


export function CreateConsult() {
    const options = [
        { label: 'Thalis Zambarda', id: 1 },
        { label: 'Yuri Ramos', id: 2 },
    ];
    return (
        <div
            className="
            flex
            flex-col
            min-h-screen"
        >
            <Header />
            <form
                className="
                flex
                flex-1
                flex-col
                justify-center
                items-center"
            >
                <div className="flex flex-col items-center">
                    <h1 className="font-bold text-4xl mb-4">
                        Criar Consulta
                    </h1>

                    <label className="font-bold">
                        Nome paciente
                    </label>

                    <Autocomplete
                        className="bg-gray-50 w-full rounded-md mb-3"
                        disablePortal
                        id="combo-box-demo"
                        options={options}
                        size="small"
                        renderInput={(params) => <TextField  {...params} />}
                    />

                    {/* <label className="font-bold">
                        Telefone
                    </label>

                    <Input />

                    <label className="font-bold">
                        Data nascimento
                    </label>

                    <Input /> */}

                    <label className="font-bold">
                        Descrição
                    </label>

                    <Input />

                    <label htmlFor="select" className="font-bold">
                        Risco
                    </label>

                    <select id="select" className="bg-gray-50 py-3.4 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="null" selected>Selecione</option>
                        <option value="valor1">Alto</option>
                        <option value="valor2">Médio</option>
                        <option value="valor3">Baixo</option>
                    </select>

                    <button
                        type="submit"
                        className="
                        bg-blue-600 
                        py-2 
                        w-full 
                        rounded-xl 
                        mt-4
                        hover:bg-blue-500"
                    >
                        Criar
                    </button>

                </div>

            </form>
        </div>
    )
}