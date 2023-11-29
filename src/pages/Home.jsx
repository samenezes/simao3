import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Home() {
    const [temperaturas, setTemperaturas] = useState([])

    const getFromLocalstorage = () => {
        return JSON.parse(localStorage.getItem("temperaturas")) ?? []
    }

    useEffect(() => {
        setTemperaturas(getFromLocalstorage())
    }, [])

    return (
        <>
            <header>
                <button>
                    <Link to="/temperaturas-excluidas">Excluir Temperaturas</Link>
                </button>
                <h1>Home</h1>
                <button>
                    <Link to="/temperaturas-excluidas">Adicionar Temperaturas</Link>
                </button>
            </header>
            <ul>
                {temperaturas.map((temp, index) => (
                    <li key={index}>{temp}</li>
                ))}
            </ul>
        </>
    )
}