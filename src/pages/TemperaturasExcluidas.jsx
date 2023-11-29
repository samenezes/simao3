import { Link } from "react-router-dom"
import { useState, useEffect } from "react"


export default function TemperaturasExcluidas() {
    const [temperaturas, setTemperaturas] = useState([])

    const getFromLocalstorage = () => {
        return JSON.parse(localStorage.getItem("temperaturas")) ?? []
    }

    useEffect(() => {
        setTemperaturas(getFromLocalstorage())
    }, [])

    const deleteFromLocalstoorage = (index) => {
        console.log(index)
        let listaTemperaturas =  JSON.parse(localStorage.getItem("temperaturas")) ?? []
        let novaListaTemperaturas = []
        listaTemperaturas = listaTemperaturas.map((temp, i) => {
            if (i !== index) {
                novaListaTemperaturas.push(temp)
            }
        })
        localStorage.setItem("temperaturas", JSON.stringify(novaListaTemperaturas))
        setTemperaturas(novaListaTemperaturas)
    }
    return (
        <>
            <header>
                <button>
                    <Link to="/">Home</Link>
                </button>
                <h1>Temperaturas Excluidas</h1>
            </header>
            <main>
                {temperaturas.map((temp, index) => (
                    <li key={index}>
                        {temp}
                        <button onClick={() => deleteFromLocalstoorage(index)} >Deletar</button>
                    </li>
                ))}
            </main>
        </>
    )
}