import React from 'react';

function Form() {
    return (
        <form>
            <div className="row">
                <label>Elige tu Moneda</label>
                <select className="u-full-width">
                    <option value="">- Elige tu Moneda</option>
                    <option value="USD">Dola Estadounidense</option>
                    <option value="MXN">Peso Mexicano</option>
                    <option value="GBP">Libras</option>
                    <option value="EUR">Euro</option>
                </select>
            </div>
            <div className="row">
                <label>Elige tu Criptomoneda</label>
                <select className="u-full-width" />
            </div>
        </form>
    );
}

export default Form;
