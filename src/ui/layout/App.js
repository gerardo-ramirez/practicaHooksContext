import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import { Provider } from "../../api/contexto"
import ManejoErrores from "../paginas/ManejoErrores";
import ErrorComponent from '../ErrorComponent';
import ErroresHoc from "../paginas/ErroresHoc";


class App extends React.Component {

    constructor() {
        super()
        this.state = {
            links: ["clientes", "tickets", "contacto", "cuentahooks", "counter"],
            nombre: "",
            apellido: "",
            clientes: [],
            handleChange: this.handleChange.bind(this),
            handleSubmit: this.handleSubmit.bind(this)
        }

    }

    handleSubmit(e) {
        e.preventDefault()
        this.setState(estadoPrevio => ({ nombre: "", apellido: "", clientes: [...estadoPrevio.clientes, { nombre: estadoPrevio.nombre, apellido: estadoPrevio.apellido }] }))
    }

    handleChange({ target }) {
        const { name, value } = target
        this.setState({ [name]: value })
    }

    render() {
        let { links } = this.state
        return (
            <Provider value={this.state}>
                <ErrorComponent>
                    <ManejoErrores />
                </ErrorComponent>


                <Router>
                    <Header links={links} />
                    <Main />
                    <Footer links={links} />
                </Router>
                <ErroresHoc />

            </Provider>

        )
    }
}

export default App