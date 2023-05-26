import React from 'react';
import './App.css';
import {Cars} from './components/Cars'

const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]

function App() {
    return (
        <div className="App">
            <Cars cars={topCars}/>
        </div>
    );
}

export default App;
