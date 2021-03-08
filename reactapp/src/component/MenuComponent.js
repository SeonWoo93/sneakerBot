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
            loginShow        : false, //loginModal 초기값
            joinShow         : false, //joinModal 초기값
            joinPassword     : '',    //회원가입 비밀번호
            joinPassword_chk : '',    //회원가입 비밀번호 체크
            message_chk      : '',    //비밀번호 일치여부
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
        let body = {
            username : data.get("loginUsername"),
            password : data.get("loginPassword"),
        }

        if(body.username === '') {
            alert("아이디를 입력해주세요.");
            return false;
        }

        if(body.password === '') {
            alert("비밀번호를 입력해주세요.");
            return false;
        }

        console.log(body);

        //loginModel close
        this.setState({
            loginShow : false,
        });
        
        //login url호출
        this.props.loginUser(body);
    }

    //join
    joinSubmit = (e) => {
        //페이지 리로딩 방지
        e.preventDefault();

        //form 태크 하위 태그의 모든 값을 가져옴
        const data = new FormData(e.target);

        //전달할 데이터
        let body = {
            username         : data.get("joinUsername"),
            password         : data.get("joinPassword"),
            joinPassword_chk : data.get("joinPassword_chk"),
        }

        if(body.username === '') {
            alert("아이디를 입력해주세요.");
            return false;
        }

        if(body.password !== body.joinPassword_chk) {
            alert("비밀번호를 확인해주세요");
            return false;
        }

        if(body.password === '' || body.password == '') {
            alert("비밀번호를 입력해주세요");
            return false;
        }

        console.log(body);

        //joinModel close
        this.setState({
            joinShow : false,
        });

        //join url호출
        this.props.joinUser(body);
    }

    //password
    password = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }) //password값 업데이트

        if(this.state.joinPassword_chk !== '' && e.target.value !== '') {
            if(e.target.value !== this.state.joinPassword_chk) {
                this.setState({
                    message_chk : "비밀번호가 일치하지 않습니다."
                })
            } else {
                this.setState({
                    message_chk : "비밀번호가 일치합니다."
                })
            }
        } else {
            this.setState({
                message_chk : ''
            })
        }
    }

    //password_chk
    password_chk = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        }) //password_chk값 업데이트

        if(this.state.joinPassword !== '' && e.target.value !== '') {
            if (e.target.value !== this.state.joinPassword) {
                this.setState({
                    message_chk : "비밀번호가 일치하지 않습니다."
                })
              } else {
                this.setState({
                    message_chk : "비밀번호가 일치합니다."
                })
              }
        } else {
            this.setState({
                message_chk : ''
            })
        }
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
                                            <Form.Control type="text" name="loginUsername" placeholder="sing your ID" />
                                            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" name="loginPassword" placeholder="sing your Password" />
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
                            <Form onSubmit={this.joinSubmit}>
                                <Modal.Body>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>user ID</Form.Label>
                                            <Form.Control type="text" name="joinUsername" placeholder="sing your ID" />
                                            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" name="joinPassword" placeholder="sing your Password" 
                                                 onChange={this.password}/>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password check</Form.Label>
                                            <Form.Control type="password" name="joinPassword_chk" placeholder="sing your Password" 
                                                onChange={this.password_chk}/>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Control type="text" placeholder={this.state.message_chk} readOnly />&nbsp;&nbsp;
                                        </Form.Group>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="primary" type="submit">submit</Button>
                                    <Button variant="secondary" onClick={this.handleJoinClose}>Close</Button>
                                </Modal.Footer>
                            </Form>
                    </Modal>
                </>
            </div>
        );
    }
}

export default MenuComponent;