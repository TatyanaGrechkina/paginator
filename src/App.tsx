import React from 'react';
import './App.scss';
import Paginator from './components/paginator/Paginator';

function App() {
   const words = ['All', 'New', 'Popular'];
    return (
        <div className={"App"}>
         <Paginator pages={words} />
        </div>
    );
}

export default App;
