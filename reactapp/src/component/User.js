import React, { Component } from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class User extends Component {

    render() {
        return (
            /*<div className="App">
                <header className="App-header">
                    <div>
                        <br />
                        <Button variant="primary" onClick={this.props.userList}>userList</Button>
                    </div>
                </header>
            </div>*/
            <div className="App">
                <header className="App-header">
                    <div>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>User Id</Form.Label>
                                <Form.Control type="email" placeholder="Enter Id" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" size="lg" onClick={this.props.userList}>&nbsp;&nbsp;login&nbsp;&nbsp;</Button> 
                        </Form>
                    </div>
                </header>
            </div>
        );
    }
}

export default User;