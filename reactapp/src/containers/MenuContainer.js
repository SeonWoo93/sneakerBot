import MenuComponent from "../component/MenuComponent";
import { connect } from "react-redux";
import axios from 'axios';

const url = "http://localhost:8000/account/";

function reduxToReact(state) {
    console.log(state.userList);
    return {
        loginUser : state.loginUser,
        userList  : state.userList
    }
}

function dispatchRedux(dispatch, props) {
    return {
        loginUser: function (body) {
            console.log(body);
            axios.get(url)
                .then(response => {
                    console.log(response.data);
                    dispatch({ type: 'LOGIN_USER', loginUser: response.data })
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
}

export default connect(reduxToReact, dispatchRedux)(MenuComponent);