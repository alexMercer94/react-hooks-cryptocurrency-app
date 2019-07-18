import React from 'react';

const CryptoCurrency = ({ Crypto }) => {
    const { FullName, Name } = Crypto.CoinInfo;

    return <option value={Name}>{FullName}</option>;
};

export default CryptoCurrency;
