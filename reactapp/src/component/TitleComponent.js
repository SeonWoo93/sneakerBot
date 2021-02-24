import React, { Component } from 'react';
import logo from '../logo.svg';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

class TitleComponent extends Component {
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
            /*<div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>{user}</p>
                </header>
            </div>*/
            <div><br/>
                <Row>
                <Col sm={1}>
                    <Form.Group>
                        <Form.Control placeholder="task" disabled />
                    </Form.Group>
                    </Col>
                <Col sm={3}></Col>
                <Col sm={4}>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="search list"
                                aria-label="search list"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <Button variant="outline-secondary" onClick={this.props.searchUser}>search</Button>
                            </InputGroup.Append>
                        </InputGroup>
                </Col>
                <Col sm={2}></Col>
                </Row>
            </div>
        );
    }
}
export default TitleComponent;