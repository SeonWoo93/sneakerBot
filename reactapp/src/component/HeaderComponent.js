import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MenuComponent from "../containers/MenuComponent";

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col><MenuComponent /></Col>
                </Row>
            </div>
        )
    }
}

export default HeaderComponent;