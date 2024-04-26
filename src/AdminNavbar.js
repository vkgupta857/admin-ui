import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function AdminNavbar() {
  return (
    <div className="bg-body-tertiary">
      <Navbar>
        <Container>
          <Navbar.Brand>
            <img src={logo} className="App-logo" />{' '}
            Admin UI
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default AdminNavbar;
