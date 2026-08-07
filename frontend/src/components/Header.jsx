import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [username, setUsername] = useState(null);
  useEffect(() => {
    fetch('http://localhost:7777/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUsername(userInfo.username)

      })
    })
  }, [])
  return (

    <header>

      <Link to="/" className="logo">  ☆ FELINE ARCHIVE ☆ </Link>
      <nav>
        {username && (
          <>
            <Link to="/create"> Add a Brand </Link>
            <a> Logout </a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login"> LOGIN </Link>
            <Link to="/register"> REGISTER </Link>
          </>
        )}

        <Link to='/brands'> ARCHIVE </Link>

      </nav>
    </header>

  );
}