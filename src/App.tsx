import React from 'react';
import './App.scss';
import Paginator from './components/paginator/Paginator';
import { PaginatorContextPage } from './components/paginator-contex/PaginatorContex';

function App() {
   const words = ['All', 'New', 'Popular'];
    return (
        <PaginatorContextPage>
            <div className={"App"}>
             <Paginator pages={words} />
            </div>
        </PaginatorContextPage>
    );
}

export default App;
