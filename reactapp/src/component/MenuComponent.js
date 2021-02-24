import React, { Component } from 'react';
import '../App.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class MenuComponent extends Component {

    render() {
        const userList = this.props.userList;
        let user = '';
        console.log(userList);

        if (userList === "no_login") {
            user = userList;
        } else {
            user = userList.map((item, key) => {
                return <p key={key}>id : {item.user_id}, pw: {item.user_pw}</p>
            });
        }

        console.log(user);

        return (
            <div className="App">
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="#home">SneakerBot</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#task">Task</Nav.Link>
                        <Nav.Link href="#proxies">Proxies</Nav.Link>
                        <Nav.Link href="#billing">Billing</Nav.Link>
                        <Nav.Link href="#account">Account</Nav.Link>
                    </Nav>
                    <Form inline>
                        <Form.Control type="text" placeholder={userList[0].user_id} readOnly />&nbsp;&nbsp;
                        <Button variant="outline-light" size="sm">login</Button>&nbsp;&nbsp;
                        <Button variant="outline-light" size="sm">join</Button>
                    </Form>
                </Navbar>
            </div>
        );
    }
}

export default MenuComponent;