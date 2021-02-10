/*
 ����Ʈ ������Ʈ�� ���δ� ���� ������Ʈ(�����̳�)
 */
import AddNumber from "../components/AddNumber";
//redux�� ���
/*import React, { Component } from "react";
import store from "../store";

export default class extends Component {
    render() {
        return <AddNumber onClick={function (size) {
            store.dispatch({ type: 'INCREMENT', size: size })
        }.bind(this)} />
    }
}*/

//react-redux���
import { connect } from "react-redux";

function mapReduxDispatchToReactProps(dispatch) {
    return {
        onClick: function (size) {
            dispatch({ type: 'INCREMENT', size: size });
        }
    }
}
export default connect(null, mapReduxDispatchToReactProps)(AddNumber);