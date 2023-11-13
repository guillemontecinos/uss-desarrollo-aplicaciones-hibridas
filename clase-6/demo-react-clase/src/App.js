import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function Header(){
    return(
        <div className='header'></div>
    )
}

function App() {
    const [cuadrante, setCuadrante] = useState(1)
    return (
        <div className="App">
            <Header />
            <Botonera />
            <Menu />
        </div>
    );
}

export default App;
