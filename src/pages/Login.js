import React, { useContext, useState } from 'react';
import Layout from '../components/Layout';

import { CartContext } from '../contexts/CartContext';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { handleLogin, isLoggedIn  } = useContext(CartContext);

    const login = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({ "email": email, "password": password });
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        }
        await fetch("http://localhost:8080/login", requestOptions )
        .then(response => {return response.text() })
        .then(handleLogin(email))
    }
    
    return ( 
        <Layout title="Cart" description="This is the Cart page" >
                {!isLoggedIn ?
                <div>
                <div className="text-center mt-5">
                    <h1>Olá</h1>
                    <p>Para continuar a comprar, entre em sua conta</p>
                </div>

                <div className="row no-gutters justify-content-center">
                    <div className="col-sm-9 p-3">
                    <div>
                <label>
                    Usuário:
                    <input type="text" value={email} onChange={ev => setEmail(ev.target.value)} />
                </label>
                </div>
                <div>
                <label>
                    Senha:
                    <input type="password" value={password} onChange={ev => setPassword(ev.target.value)} />
                </label>
                </div>
                <div>
                <button onClick={() => login()}>Enviar</button>
                </div>
                    </div>
                    
                </div>
                </div>
                : <div className="text-center mt-5">
                <h1>Olá</h1>
                <p>Você já efetuou seu login, compre algo!</p>
            </div>}

        </Layout>
     );
}

export default Login