import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MenuContainer from "../containers/MenuContainer";

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col><MenuContainer /></Col>
                </Row>
            </div>
        )
    }
}

export default HeaderComponent;