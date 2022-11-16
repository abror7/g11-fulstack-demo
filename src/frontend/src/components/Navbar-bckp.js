import React, {useState} from 'react';

const Navbar = (props) => {
    const {ism, yoshi} = props;
    const [ismState, setIsmState] = useState(ism);


    function ismniUzgartir() {
        setIsmState('Afzal');
    }

    return (
        <div>
            <h1>Hello {ismState}. Please, wake up!!!!</h1>
            <h5>He is {yoshi} years old!</h5>
            <button onClick={() => ismniUzgartir()}>Ismni Afzalga o'zgartir</button>
            <hr/>
        </div>
    );
};

export default Navbar;