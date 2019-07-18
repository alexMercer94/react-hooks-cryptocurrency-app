import React, { useState, useEffect } from 'react';
import image from './cryptomonedas.png';
import Form from './components/Form';
import axios from 'axios';
import Spinner from './components/Spinner/Spinner';
import Cotizacion from './components/Cotizacion';
function App() {
    const [moneda, saveMoneda] = useState('');
    const [criptomoneda, saveCriptomoneda] = useState('');
    const [loading, saveLoading] = useState(false);
    const [resultado, saveResult] = useState({});

    useEffect(() => {
        const cotizarCriptomoneda = async () => {
            // Si no hay moneda, no ejecutar la consulta
            if (moneda === '') {
                return;
            }

            const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

            const result = await axios.get(URL);
            // Mostrar Spinner
            saveLoading(true);

            // Ocultar el spinner despues de 3 segundos y agregar el resultado
            setTimeout(() => {
                saveLoading(false);
                saveResult(result.data.DISPLAY[criptomoneda][moneda]);
            }, 3000);
        };

        cotizarCriptomoneda();
    }, [moneda, criptomoneda]);

    // Mostrar Spinner o resultado
    const component = loading ? <Spinner /> : <Cotizacion resultado={resultado} />;

    return (
        <div className="container">
            <div className="row">
                <div className="one-half column">
                    <img src={image} alt="Foto cryptomonedas" className="logotipo" />
                </div>
                <div className="one-half column">
                    <h1>Cotiza Criptomonedas al Instante</h1>
                    <Form saveMoneda={saveMoneda} saveCriptomoneda={saveCriptomoneda} />

                    {component}
                </div>
            </div>
        </div>
    );
}

export default App;
