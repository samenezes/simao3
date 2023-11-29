import { useState } from "react"
import { Link } from "react-router-dom"


export default function TemperaturasAdicionadas() {
    const [novaTemperatura, setNovaTemperatura] = useState("")
    const saveOnLocalstorage = (temperatura) => {
        let listaTemperaturas = JSON.parse(localStorage.getItem("temperaturas")) ?? []
        listaTemperaturas.push(temperatura)
        localStorage.setItem("temperaturas", JSON.stringify(listaTemperaturas))
    }


    return (
        <>
            <header>
                <button>
                    <Link to="/">Home</Link>
                </button>
                <h1>Temperaturas Adicionadas</h1>
            </header>
            <div>
                <label>
                    Nova Temperatura
                    <input value={novaTemperatura} onInput={e => setNovaTemperatura(e.target.value)} type="text" required />
                </label>
                <button onClick={() => {saveOnLocalstorage(novaTemperatura)}}>Adicionar Temperatura</button>
            </div>
        </>
    )
}