import React, {useState} from "react";
import Navbar from "./components/Navbar";
import Task from "./components/Task";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

    const [sanash, setSanash] = useState(0);
    const [message, setMessage] = useState('');


    function decrease() {
        if (sanash > 0) setSanash(sanash - 1)
        else alert('Baraka topkur 0 ga yetib keldi!!!')
    }

    function handleChange(e) {
        let msg = e.target.value;
        if (msg === 'Abror') {
            msg = msg + ' is the best!!!';
        } else if (msg === 'Oybek') {
            msg = msg + ' is the best student in the world!!!';
        }
        setMessage(msg);
    }

    return <div>
        <ToastContainer />
        <Navbar ism={'Oybek'} yoshi={17}/>
        <ul>
            <li>Oybek</li>
            <li>Afzal</li>
            <li>Mirzaasror</li>
            <li>Oxunjon</li>
        </ul>
        <hr/>
        <h1>{sanash}</h1>
        <button onClick={() => setSanash(sanash + 1)}>+ Oshirish</button>
        <button onClick={decrease}>- Kamaytirish</button>
        <hr/>
        <h1>{message}</h1>
        <input type="text" onChange={(e) => handleChange(e)}/>
        <hr/>
        <Task />
    </div>

}

export default App;