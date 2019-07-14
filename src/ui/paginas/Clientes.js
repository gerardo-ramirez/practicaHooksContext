import React from "react"
import { Consumer } from "../../api/contexto"

class Clientes extends React.Component {
    render() {
        return (
            <Consumer>
                {contexto => {
                    let { nombre, apellido , handleChange, handleSubmit } = contexto
                    return (
                        <React.Fragment>

                            <h2>Clientes</h2>
                            <form onSubmit={handleSubmit}>

                                <input type="text" placeholder="Ingrese nombre" onChange={handleChange} name="nombre" value={nombre} />

                                <input type="text" placeholder="Ingrese apellido" onChange={handleChange} name="apellido" value={apellido} />

                                <button>Enviar</button>

                            </form>
                        </React.Fragment>
                    )
                }}
            </Consumer>
        )
    }
}

export default Clientes