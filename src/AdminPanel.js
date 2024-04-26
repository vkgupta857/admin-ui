import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Table, Form, Container, Button } from 'react-bootstrap';

class AdminPanel extends Component {

  componentDidMount() {
    // fetch()
  }

  render() {
    return (
      <Container>
        <Form>
          <Form.Control type="email" placeholder="Search by name, email or role" />
        </Form>
        <br />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </Table>
        <br />
        <Button variant='danger'>Delete selected</Button>
      </Container>
    );
  }
}

export default AdminPanel;
