

export function Header() {
    return (
            <div className="flex items-end justify-end border-gray-600 px-2">

                <nav className="flex items-center justify-end sm:justify-cente w-full">
                    {[
                        ['Inicio', '/home'],
                        ['Criar Consulta', '/createConsult'],
                        ['Triagem', '/triagem'],
                        ['Atendimento', '/atendimento'],
                    ].map(([title, url]) => (
                        <a href={url} 
                            className="
                            p-2 
                            text-center 
                            text-white 
                            font-medium 
                            hover:text-secondary"
                        >
                            {title}
                        </a>
                    ))}
                </nav>

            </div>
        
    )
}