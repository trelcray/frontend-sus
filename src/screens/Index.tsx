export function Index(){
    return (
        <div className="
                        flex 
                        flex-col 
                        justify-center 
                        items-center 
                        min-h-screen"
        >
                <h1 className="font-bold text-4xl mb-4">
                    Verificar andamento
                </h1>

            <label className="font-bold mb-3">insira seu código do SUS!</label>

            <input 
            type="text" 
            className="
                        bg-inherit
                        border
                        border-gray-400
                        rounded-md
                        py-1
                        px-2
                        focus:outline
                        focus:ring-1
                        focus:border-blue-500
                        focus:ring-blue-500"
            />
            
        </div>

    )
}