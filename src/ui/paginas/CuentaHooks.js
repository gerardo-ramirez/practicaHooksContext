import React, { useState, useEffect } from 'react';
//hooks reemplazantes:
/*
useState = this.state y this.setState
useEffect = componentDidMount , componentWillMount;

*/
//funcion con useEffect :
const UseCoordenadas = () => {
    const [coordenadas, setCoordenadas] = useState({
        latitud: null,
        longitud: null,
    });
    let geoId;
    //cual si fuera didmount:
    useEffect(() => {

        geoId = window.navigator.geolocation.watchPosition(position => {
            setCoordenadas({
                latitud: position.coords.latitude,
                longitud: position.coords.longitude
            });
        });
        return () => {
            window.navigator.geolocation.clearWatch(geoId);
        }

    }, []);

    return coordenadas;
};
const Coordenadas = () => {
    const coordenadas = UseCoordenadas();
    return (
        coordenadas.latitud == null ? (
            <div> Cargando...</div>
        ) : (
                <div>
                    <h2>latitud: {coordenadas.latitud}</h2>
                    <h2>latitud: {coordenadas.longitud}</h2>

                </div>
            )
    )

}





const CuentaHooks = () => {
    const [cuenta, setCuenta] = useState(0);

    return (
        <div>
            la cuenta es: {cuenta}
            <button onClick={() => setCuenta(cuenta + 1)}>Aumentar</button>
            <button onClick={() => setCuenta(cuenta - 1)}>decrementar</button>

            <div>
                <Coordenadas />
            </div>
        </div>

    )

}
export default CuentaHooks;