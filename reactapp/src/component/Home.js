import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


class Home extends Component {

    render() {
        const userList = this.props.userList;
        console.log(userList);

        if (userList === "no_login") {
            const user = userList;
            return <p>{user}</p>
        }

        const user = userList.map((item, key) => {
            return <p key={key}>id : {item.user_id}, pw: {item.user_pw}</p>
        });
        console.log(user);

        return (
            <div className="App">
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                </Navbar>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                        {user}
                </header>
            </div>
        );
    }
}

export default Home;