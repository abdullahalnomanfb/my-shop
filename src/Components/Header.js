import React from 'react';
import { Navbar } from 'react-bootstrap';
const Header = () => {
    return (
        <Navbar  className="sticky-top mb-5" bg="dark" variant="dark">
            <Navbar.Brand href="/">
                {' '}
      My Shop
    </Navbar.Brand>
        </Navbar>
    );
};

export default Header;