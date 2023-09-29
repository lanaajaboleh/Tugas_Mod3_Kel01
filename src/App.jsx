import { useState, useEffect } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Logo from '../logo.svg';

function Patrick_Star() {
    return (
        <>
            <a  target="_blank" rel="noreferrer">
                <img src={Logo} className="logo" alt="Petrik" />
            </a>
        </>
    );
}


function App() {
    const [count, setCount] = useState(0);
    const [check, setCheck] = useState(false);

    useEffect(() => {
        if (count === 10) {
            setCheck(true);
        } else {
            setCheck(false);
        }
    }, [count]);



    return (
        <>
            <h3>Kelompok 9</h3>
            <Patrick_Star />
            <div>
                {check && (
                    <b style={{ color: "white" }}>Kita sampai di angka 10, Spongebob!</b>
                )}
            </div>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    +
                </button>
                <h3 style={{ marginInline: "10px" }}>{count}</h3>
                <button onClick={() => setCount((count) => count - 1)}>
                    -
                </button>
            </div>
        </>
    );
}

export default App;