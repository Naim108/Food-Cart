import React from 'react';
import { Button, Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
  const {user,logOut}=useAuth();
    return (
        <>
        <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
    <Container>
    <Link className="nav-bar" to="/home">Food Cart</Link>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end ">
    <Link className="nav-bar" to="/home">Home</Link>
    <Link className="nav-bar" to="/about">About</Link>
     { user?.email?
         <Dropdown>
         <Dropdown.Toggle className="nav-bar dropdown-color"  id="dropdown-autoclose-true">
           Admin Dashboard
         </Dropdown.Toggle>
     
         <Dropdown.Menu>
           
           <Dropdown.Item><Link className="nav-bar" to="/addProduct">Add Product</Link></Dropdown.Item>
           <Dropdown.Item><Link className="nav-bar" to="/myOrders">My Orders</Link></Dropdown.Item>
           <Dropdown.Item><Link className="nav-bar" to="/manageOrder">Manage All Order</Link></Dropdown.Item>
         </Dropdown.Menu>
       </Dropdown>
       : ''
     }
     
      {user?.email ? 
      <Button className="nav-bar" onClick={logOut} variant="light">Log Out</Button>
      :
      <Link className="nav-bar" to="/login">Login</Link>

      }
      <Navbar.Text>
         <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>
            
        </>
    );
};

export default Header;