import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Special = ({ring}) => {
    const Angti=useContext(RingContext);
    return (
        <div>
            <h2>Special</h2>
            <p>{Angti}</p>
        </div>
    );
};

export default Special;