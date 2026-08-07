import { useState } from "react"

export default function Register() {
    const [firstname, setFirstName] = useState(' ');
    const [lastname, setLastName] = useState(' ');
    const [username, setUsername] = useState(' ');
    const [password, setPassword] = useState(' ');

        async function register(ev) {
        ev.preventDefault();

        const response = await fetch('http://localhost:7777/register', {
            method: 'POST',
            body: JSON.stringify({ firstname, lastname, username, password }),
            headers: { 'Content-Type': 'application/json' },
        }); 
        if (response.status === 200) {
            alert('registration successful! '); 
        } else {
            alert('registration failed'); 
            

        }


    }
    // async function register(ev) {
    //     try {
    //         const response = await fetch(`http://localhost:7777/register`);
    //         const data = await response.json();
    //         console.log(data);
    //         return setBrands(data);
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }
    // useEffect(() => {
    //     getBrands();
    // }, []);

    return (

        <form className="register" onSubmit={register}>
            <h1> REGISTRATION </h1>
            <p> Register with FELINE ARCHIVE to save your favorite stores. </p>
            {/* FIRST NAME */}
            <input
                type="text"
                placeholder="first name"
                value={firstname}
                onChange={ev => setFirstName(ev.target.value)} />
            {/*LAST NAME */}
            <input
                type="text"
                placeholder="last name"
                value={lastname}
                onChange={ev => setLastName(ev.target.value)} />
            {/*USERNAME */}
            <input type="text"
                placeholder="username"
                value={username}
                onChange={ev => setUsername(ev.target.value)} />
            {/*PASSWORD */}
            <input type="password"
                placeholder="password"
                value={password}
                onChange={ev => setPassword(ev.target.value)} />
            <button> REGISTER </button>
        </form>


    )
}    
