import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <h1>This is Main</h1>
            <Outlet></Outlet>
            <Toaster />
        </div>
    );
};

export default Main;