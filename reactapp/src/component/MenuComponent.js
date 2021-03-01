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
            loginShow : false, //loginModal 초기값
            joinShow  : false, //joinModal 초기값
        };
    }

    //loginModal close
    handleLoginClose = () => {
        this.setState({
            loginShow : false,
        });
    }

    //loginModal open
    handleLoginShow = () => {
        this.setState({
            loginShow : true,
        });
    }

    //joinModal close
    handleJoinClose = () => {
        this.setState({
            joinShow : false,
        });
    }

    //joinModal open
    handleJoinShow = () => {
        this.setState({
            joinShow : true,
        });
    }

    //login
    loginSubmit = (e) => {
        // 페이지 리로딩 방지
        e.preventDefault();

        // form 태그 하위 태그의 모든 값을 가져옴
        const data = new FormData(e.target);

        //전달할 데이터
        const username = data.get("username");
        const password = data.get("password");
        
        let body = {
            username : data.get("username"),
            password : data.get("password"),
        }

        console.log(body);

        //loginModel close
        this.setState({
            loginShow : false,
        });
        
        //login url호출
        this.props.loginUser();
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
                        <Button variant="outline-light" size="sm" onClick={this.handleLoginShow}>login</Button>&nbsp;&nbsp;
                        <Button variant="outline-light" size="sm" onClick={this.handleJoinShow}>join</Button>
                    </Form>
                </Navbar>

                <>
                    <Modal
                        show={this.state.loginShow}
                        onHide={this.handleLoginClose}
                        backdrop="static"
                        keyboard={false}
                    >
                    <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>
                        </Modal.Header>
                            <Form onSubmit={this.loginSubmit}>
                                <Modal.Body>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>user ID</Form.Label>
                                            <Form.Control type="text" name="username" placeholder="sing your ID" />
                                            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" name="password" placeholder="sing your Password" />
                                        </Form.Group>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="primary" type="submit">submit</Button>
                                    <Button variant="secondary" onClick={this.handleLoginClose}>Close</Button>
                                </Modal.Footer>
                            </Form>
                    </Modal>
                </>

                <>
                    <Modal
                        show={this.state.joinShow}
                        onHide={this.handleJoinClose}
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

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password check</Form.Label>
                                    <Form.Control type="password" placeholder="sing your Password" />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" type="submit">submit</Button>
                            <Button variant="secondary" onClick={this.handleJoinClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </>
            </div>
        );
    }
}

export default MenuComponent;