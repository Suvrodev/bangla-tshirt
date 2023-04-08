import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Brother = () => {
    const GetContext=useContext(RingContext)
    return (
        <div>
            <h2>Brother</h2>
            <p>{GetContext}</p>
        </div>
    );
};

export default Brother;