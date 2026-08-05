import { Link } from "react-router-dom";

export default function Header() {
    return (
       
         <header className="header">

        <a href="" className="logo">  ☆ HOT GIRL ARCHIVE ☆ </a>
        <nav>
          <Link to="/login"> LOGIN </Link>
          <Link to="/register"> REGISTER </Link>

        </nav>
      </header>

    ); 
}