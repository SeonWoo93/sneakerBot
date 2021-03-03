import MenuComponent from "../component/MenuComponent";
import { connect } from "react-redux";
import axios from 'axios';

const loginUrl = "http://localhost:8000/account/";
const joinUrl  = "http://localhost:8000/user/";

function reduxToReact(state) {
    console.log(state.userList);
    return {
        loginUser : state.loginUser,
        userList  : state.userList
    }
}

function dispatchRedux(dispatch, props) {
    return {
        //login url
        loginUser : function(body) {
            console.log(body);
            axios.get(loginUrl)
                .then(response => {
                    console.log(response.data);
                    dispatch({ type: 'LOGIN_USER', loginUser: response.data })
                })
                .catch(error => {
                    console.log(error);
                });
        },

        //join url
        joinUser : function(body) {
            console.log(body);
            axios.get(joinUrl)
                .then(response => {
                    console.log(response.data);
                    dispatch({ type: 'JOIN_USER', joinUser: response.data })
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
}

export default connect(reduxToReact, dispatchRedux)(MenuComponent);