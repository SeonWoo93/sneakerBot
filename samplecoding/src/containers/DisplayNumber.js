import React, { Component } from "react";
//redux�� ���
/*import DisplayNumber from "../components/DisplayNumber";
import store from '../store';

export default class extends Component {
    state = { number: store.getState().number }
    constructor(props) {
        super(props);
        store.subscribe(function () {
            this.setState({ number: store.getState().number });
        }.bind(this));
    }

    render() {
        return <DisplayNumber number={this.state.number} unit={this.props.unit}/>
    }
}*/

/*
 react - redux���
 npm install react-reduxt ��ġ
 */
import { connect } from 'react-redux';
import DisplayNumber from "../components/DisplayNumber";
function mapRdeuxStateToReactProps(state) {
    return {
        number: state.number
    }
}

export default connect(mapRdeuxStateToReactProps)(DisplayNumber);