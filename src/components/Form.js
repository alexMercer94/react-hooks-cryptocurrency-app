import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import CryptoCurrency from './CryptoCurrency';
import Error from './Error';

function Form({ saveMoneda, saveCriptomoneda }) {
    const [cryptoCurrency, saveCryptoCurency] = useState([]);
    const [monedaCotizar, saveMonedaCotizar] = useState('');
    const [cryptoCotizar, saveCrytoCotizar] = useState('');
    const [error, saveError] = useState(false);

    useEffect(() => {
        const fetchAPI = async () => {
            const URL = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=15&tsym=USD';
            const result = await Axios.get(URL);

            // Colocar respuesta en el State
            saveCryptoCurency(result.data.Data);
        };

        fetchAPI();
    }, []);

    // Validar que el usuario llene ambos campo del formulario
    const cotizarMoneda = e => {
        e.preventDefault();

        // Validar si ambos campos estan llenos
        if (monedaCotizar === '' || cryptoCotizar === '') {
            saveError(true);
            return;
        }

        // Pasar los datos al componente principal
        saveError(false);
        saveMoneda(monedaCotizar);
        saveCriptomoneda(cryptoCotizar);
    };

    // Mostrar el error en caso de que exista
    const component = error ? <Error message="Ambos campos son obligatorios." /> : null;

    return (
        <form onSubmit={cotizarMoneda}>
            {component}
            <div className="row">
                <label>Elige tu Moneda</label>
                <select onChange={e => saveMonedaCotizar(e.target.value)} className="u-full-width">
                    <option value="">- Elige tu Moneda</option>
                    <option value="USD">Dolar Estadounidense</option>
                    <option value="MXN">Peso Mexicano</option>
                    <option value="GBP">Libras</option>
                    <option value="EUR">Euro</option>
                </select>
            </div>
            <div className="row">
                <label>Elige tu Criptomoneda</label>
                <select onChange={e => saveCrytoCotizar(e.target.value)} className="u-full-width">
                    <option value="">- Elige tu Criptomoneda</option>
                    {cryptoCurrency.map(crypto => (
                        <CryptoCurrency key={crypto.CoinInfo.Id} Crypto={crypto} />
                    ))}
                </select>
            </div>
            <input type="submit" className="button-primary u-full-width" value="Calcular" />
        </form>
    );
}

export default Form;
