import React from 'react';
import Cusin from '../Cusin/Cusin';

const Aunty = ({ring}) => {
    return (
        <div>
            <h2>Aunty</h2>
            <section>
                <Cusin>Abir</Cusin>
                <Cusin ring={ring} hasfriend={true} >Nibir</Cusin>
            </section>
        </div>
    );
};

export default Aunty;