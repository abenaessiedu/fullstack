import { Link } from "react-router-dom";

export default function Header() {
  return (

    <header>

      <Link to="/" className="logo">  ☆ FELINE ARCHIVE ☆ </Link>
      <nav>
        <Link to="/login"> LOGIN </Link>
        <Link to="/register"> REGISTER </Link>
        <Link to='/brands'> ARCHIVE </Link>

      </nav>
    </header>

  );
}