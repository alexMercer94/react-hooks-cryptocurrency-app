import React from 'react';
import image from './cryptomonedas.png';
import Form from './components/Form';

function App() {
    return (
        <div className="container">
            <div className="row">
                <div className="one-half column">
                    <img src={image} alt="Foto cryptomonedas" className="logotipo" />
                </div>
                <div className="one-half column">
                    <h1>Cotiza Criptomonedas al Instante</h1>
                    <Form />
                </div>
            </div>
        </div>
    );
}

export default App;
