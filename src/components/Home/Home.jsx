import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';

const Home = () => {
    const t_shirts=useLoaderData()
    console.log(t_shirts)
    return (
        <div>
            <h2>This is Home</h2>
            <h1>T-SHirts: {t_shirts.length} </h1>
        </div>
    );
};

export default Home;