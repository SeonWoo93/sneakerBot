/*
 리액트 컴포넌트를 감싸는 랩핑 컴포넌트(컨테이너)
 */
import AddNumber from "../components/AddNumber";
//redux만 사용
/*import React, { Component } from "react";
import store from "../store";

export default class extends Component {
    render() {
        return <AddNumber onClick={function (size) {
            store.dispatch({ type: 'INCREMENT', size: size })
        }.bind(this)} />
    }
}*/

//react-redux사용
import { connect } from "react-redux";

function mapReduxDispatchToReactProps(dispatch) {
    return {
        onClick: function (size) {
            dispatch({ type: 'INCREMENT', size: size });
        }
    }
}
export default connect(null, mapReduxDispatchToReactProps)(AddNumber);