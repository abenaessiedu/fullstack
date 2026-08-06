import { useState } from "react"

export default function Register() {
    const [firstname, setFirstName] = useState(' ')
    const [lastname, setLastName] = useState(' ')
    const [username, setUsername] = useState(' ')
    const [password, setPassword] = useState(' ')

    async function register(ev) {
        ev.preventDefault(); 
        await fetch('http://localhost:7777/register', {
            method: 'POST', 
            body: JSON.stringify({firstname, lastname, username, password}), 
            headers: {'Content-Type': 'application/json'}, 
        } )

    }

    return (
        <>
            <form className="register" onSubmit={register}>
                <h1> REGISTRATION </h1>
                <p> Register with FELINE ARCHIVE to save your favorite stores. </p>

                <input 
                type="text" 
                placeholder="first name" 
                value={firstname}
                onChange={ev => setFirstName(ev.target.value) } />
                <input 
                type="text" 
                placeholder="last name" 
                value={lastname} 
                onChange={ev => setLastName(ev.target.value)}/>
                <input 
                type="text" 
                placeholder="username" 
                value={username} 
                onChange={ev => setUsername(ev.target.value)} />
                <input 
                type="password" 
                placeholder="password" 
                value={password}
                onChange={ev => setPassword(ev.target.value)}
                />
                <button> REGISTER </button>
            </form>

        </>
    )
}    
