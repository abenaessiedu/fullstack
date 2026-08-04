
export default function Nav({ type }) {
    const isMainNav = type === 'main'; 
    const navLinks = isMainNav  (
    <>
    <li> 
        <a href="#blackownedbrands"> 
            BLACK OWNED BRANDS
        </a>
    </li>

    <li> 
        <a href="#blackowneddesigners"> 
            BLACK OWNED DESIGNER 
        </a>
    </li>

    <li> 
        <a href="#home"> 
            HOME
        </a>
    </li>

    <li> 
        <a href="#about"> 
            ABOUT
        </a>
    </li>
     <li> 
        <a href="#blog"> 
            BLOG
        </a>
    </li>

    </>

    );
    
    return (
        <nav className={`nav-${type}`} aria-label={`${type} navigation`} role="navigation"> 
        <ul className="nav-list"> 
            {navLinks}
        </ul>
        
        </nav>

    );
}