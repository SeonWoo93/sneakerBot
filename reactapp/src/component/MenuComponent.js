import React, { Component } from 'react';
import '../App.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal';

class MenuComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false, //modal 초기값(안보임)
        };
    }

    //modal close
    handleClose = () => {
        this.setState({
            show: false,
        });
    }

    //modal open
    handleShow = () => {
        this.setState({
            show: true,
        });
    }

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
                        <Button variant="outline-light" size="sm" onClick={this.handleShow}>login</Button>&nbsp;&nbsp;
                        <Button variant="outline-light" size="sm">join</Button>
                    </Form>
                </Navbar>

                <>
                    <Modal
                        show={this.state.show}
                        onHide={this.handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                    <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>user ID</Form.Label>
                                    <Form.Control type="email" placeholder="sing your ID" />
                                    <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="sing your Password" />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" type="submit">submit</Button>
                            <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </>
            </div>
        );
    }
}

export default MenuComponent;