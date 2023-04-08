import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <h1>This is Main</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;