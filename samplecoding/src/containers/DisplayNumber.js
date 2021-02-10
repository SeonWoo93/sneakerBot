import React, { Component } from "react";
//redux만 사용
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
 react - redux사용
 npm install react-reduxt 설치
 */
import { connect } from 'react-redux';
import DisplayNumber from "../components/DisplayNumber";
function mapRdeuxStateToReactProps(state) {
    return {
        number: state.number
    }
}

export default connect(mapRdeuxStateToReactProps)(DisplayNumber);