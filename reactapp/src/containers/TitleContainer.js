import TitleComponent from "../component/TitleComponent";
import { connect } from "react-redux";
import axios from 'axios';

const url = "http://localhost:8000/user/";

function reduxToReact(state) {
    console.log(state.userList);
    return {
        userList: state.userList,
        id: state.id,
        pw: state.pw
    }
}

function dispatchRedux(dispatch, props) {

    return {
        searchUser: function () {
            axios.get(url)
                .then(response => {
                    console.log(response.data);
                    dispatch({ type: 'USERLIST', userList: response.data, id: 1, pw: 2 })
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
}

export default connect(reduxToReact, dispatchRedux)(TitleComponent);