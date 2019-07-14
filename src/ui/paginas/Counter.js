import React, { useState, useEffect } from 'react';

const Counter = () => {

    const [numero, setNumero] = useState(0);

    return (

        < div >
            <button onClick={() => {
                setNumero(numero + 1);
            }}>

                ..
                 </button>
            {numero}
        </div >

    )
}
export default Counter;