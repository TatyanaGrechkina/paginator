import React from 'react';
import './App.scss';
import PaginatorMain from "./components/paginator-main/PaginatorMain";

function App() {
   const words = ['All', 'New', 'Popular'];
    return (
            <div className={"App"}>
                <PaginatorMain pages={words}/>
            </div>
    );
}

export default App;
