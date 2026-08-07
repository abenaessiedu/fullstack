import { useState } from "react";

export default function Login() {
    const [username, setUsername] = useState(' '); 
    const [password, setPassword] = useState(' '); 
    const [redirect, setRedirect] = useState(false); 
    async function login() {
        ev.preventDefault(); 
        const response = await fetch('http://localhost:7777/login', {
            method: 'POST', 
            body: JSON.stringify({username, password}), 
            headers: {'Content-Type': 'application/json'}, 
            credentials: 'include', 
        })
        if (response.ok) {
            setRedirect(true); 
        } else {
            alert('wrong credentials'); 
        }
    }
    if (redirect) {
        return <Navigate to={'/'}/>
    } 
    return (
        <form className="login" onSubmit={login}>
            <h1>  LOGIN  </h1>
            <p> Please log into your account. </p>
            <input type="text" 
            placeholder="username" 
            value={username} 
            onChange={ev => setUsername(ev.target.value)} />
            <input type="password" placeholder="password" value={password} onChange={ev => setPassword(ev.target.value)} />
            <button> LOGIN </button>
        </form>

    )
}