import React, {useState} from 'react';
import './login.css';
import Title from './components/Title/Title';
import Label from './components/Label/Label';
import Input from './components/Input/Input'

const Login = () => {
    // Constante array donde user almacena mi state y setUser funcion encargada de actualizar ese state.
    const [user, setUser] = useState('');
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);

    function handleChange(name, value) {
        (name === "usuario") 
        ? setUser(value) : value.length < 6 
        ? setPasswordError(true) 
        : setPassword(value); 
          setPasswordError(false);
    }

    function handleSubmit() {
        let account = { user, password};
        (account) && console.log(account);
    }

    return (
        <div className="login-container">
            <Title text="¡Bienvenido!"/>
            <Label text="Usuario"/>
            <Input 
                attribute={{
                    id : "usuario",
                    name: "usuario",
                    type : "text",
                    placeholder : "Ingrese Usuario"                    
                }}
                handleChange={handleChange}
            />
            <Label text="Contraseña"/>    
            <Input 
                attribute={{
                    id : "contraseña",
                    name: "contraseña",
                    type : "password",
                    placeholder : "Ingrese Contraseña"                    
                }}
                handleChange={handleChange}
                params={passwordError}
            />
            <button onClick={handleSubmit}>Ingresar</button>       
        </div>
    );
}

export default Login;