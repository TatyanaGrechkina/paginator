import React, {Component} from 'react';
import './App.scss';
import Paginator from './components/paginator/Paginator';

function App() {
   const words = ['All', 'New', 'Popular'];
    return (
        <Paginator pages={words} />
    );
}

export default App;
