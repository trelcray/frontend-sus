import { Header } from "../components/Header";


export function Home() {
    return (
        <div
        className="
            flex
            flex-col
            min-h-screen"
        >
            <Header/>
            <main className="flex items-center text-5xl font-bold justify-center min-h-[480px]">
                <h1 className="text-white">Bem vindo <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-secondary">ao sistema de consultas</span>  <br /> do consulta SUS</h1>
            </main>
        </div>
    )
}