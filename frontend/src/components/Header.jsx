import { Link } from "react-router-dom";

export default function Header() {
    return (
       
         <header className="header">

        <Link to="/" className="logo">  ☆ HOT GIRL ARCHIVE ☆ </Link>
        <nav>
          <Link to="/login"> LOGIN </Link>
          <Link to="/register"> REGISTER </Link>

        </nav>
      </header>

    ); 
}