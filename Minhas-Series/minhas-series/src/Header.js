import React, { useState } from 'react';
import {
  Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  const [toggleState, setToggleState] = useState(false);
  const toggle = () => {
    setToggleState(!toggleState);
  };
  return (
    <Navbar color='light' light expand='md'>
      <div className='container'>
        <NavbarBrand tag={Link} to='/'>
          Minhas Séries
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={toggleState} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem active>
              <NavLink tag={Link} to='/series'>
                Séries
              </NavLink>
            </NavItem>
            <NavItem active>
              <NavLink tag={Link} to='/generos'>
                Gêneros
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
