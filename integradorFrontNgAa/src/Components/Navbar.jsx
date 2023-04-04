import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav>
            <Link to={home.path}>{home.name}</Link>
            <Link to={contact.path}>{contact.name}</Link>
            <Link to={favs.path}>{favs.name}</Link>
        </nav>
    )
}

export default Navbar;