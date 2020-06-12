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
        ? setUser(value) : (value.length < 6) 
        ? setPasswordError(true) 
        : setPasswordError(false); setPassword(value); 
    }

    function handleSubmit() {
        let account = { user, password};
        (account)&& console.log(account);
    }

    return (
        <div className="login-container">
            <div className="login-content">
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
                    param={passwordError}
                />
                
                {passwordError &&                
                    <label className="label-error">Contraseña invalida o incorrecta</label>
                }
                <div className="submit-button-container">
                    <button onClick={handleSubmit} className="submit-button">
                        Ingresar
                    </button> 
                </div>

            </div>                              
        </div>
    );
}

export default Login;