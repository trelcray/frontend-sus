export function Login() {
    return (
        <div 
        className="
                    flex 
                    flex-col 
                    justify-center 
                    items-center 
                    min-h-screen"
        >
            <form 
            className="
                    flex 
                    flex-col 
                    items-center"
            >

                <h1 className="font-bold text-4xl mb-4">
                    Entrar
                </h1>

            <label className="font-bold mb-3">
                Insira seu código do SUS
            </label>
            
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

            <label className="font-bold my-3">
                Insira sua senha
            </label>

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
            Logar
            </button>

            </form>

        </div>
    );
}