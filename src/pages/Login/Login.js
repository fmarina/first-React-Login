import React, {useState} from 'react';
import './login.css';
import Title from './components/Title/Title';
import Label from './components/Label/Label';
import Input from './components/Input/Input'

const Login = () => {
    // Constante array donde se almacena mi state y setState quien es el encargado de actualizar ese state.
    const [user, setUser] = useState('');
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [hasError, setHasError] = useState(false);

    function handleChange(name, value) {
        if (name === "usuario") {
            setUser(value); 
            setHasError(false);
        }
        else {
            if (value.length < 6) {
                setPasswordError(true); 
                setHasError(false);
            }
            else {
                setPasswordError(false); 
                setPassword(value); 
            }
        }
    }

    function ifMatch(param) {
        const {user, password} = param;
        if(user.length > 0 && password.length > 0) {
            if(user === "admin" && password === "123456") {
                let ac = { user, password};
                console.log("ac.user", user);
                let account = JSON.stringify(ac);
                localStorage.setItem("account", account);
                setIsLogin(true); 
            } 
            else {
                setIsLogin(false);
                setHasError(true);
            }
        } 
        else {
            setIsLogin(false);
            setHasError(true);
        }        
    }

    function handleSubmit() {
        let account = { user, password};
        (account) && ifMatch(account);
    }

    return (
        <div className="login-container">
            {isLogin 
            ?
                <div className="home-container">
                    <h1>Hola, {user}!</h1>
                    <label>Estas logueado</label>
                </div>
            :
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

                {hasError &&
                    <label className="label-haserror">El nombre de usuario o la contraseña son incorrectos, o no existe en nuestra base de datos</label>
                }
                
                <div className="submit-button-container">
                    <button onClick={handleSubmit} className="submit-button">
                        Ingresar
                    </button> 
                </div>

            </div>
        }
                                          
        </div>
    )
}

export default Login;