import React from "react"
import { Route, Switch } from "react-router-dom"
import Home from "../paginas/Home"
import Clientes from "../paginas/Clientes"
import Tickets from "../paginas/Tickets"
import Contacto from "../paginas/Contacto";
import CuentaHooks from "../paginas/CuentaHooks";
import Counter from "../paginas/Counter";


class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/clientes" component={Clientes} />
                    <Route path="/tickets" component={Tickets} />
                    <Route path="/contacto" component={Contacto} />
                    <Route path="/cuentahooks" component={CuentaHooks} />
                    <Route path="/counter" component={Counter} />


                </Switch>
            </main>
        )
    }
}

export default Main