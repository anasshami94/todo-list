import React from 'react'
import './Header.css';
function Header({title, logo}) {
    
    return (
        <div className="navbar">
            {logo && <img src={logo} alt="this is app logo" width="35" height="35"/>}
            <h1>{title.toUpperCase()}</h1>
        </div>
    )

}

export default Header;