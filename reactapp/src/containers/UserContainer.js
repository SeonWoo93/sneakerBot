import User from "../component/User";
import { connect } from "react-redux";
import axios from 'axios';

const url = "http://localhost:8000/user/";

function dispatchRedux(dispatch, props) {

    return {
        userList: function () {
            axios.get(url)
                .then(response => {
                    console.log(response.data);
                    dispatch({ type: 'USERLIST', userList: response.data, id:1, pw:2 })
                    props.history.push("/home");
                })
                .catch(error => {
                    console.log(error);
                }); 
        }
    }
}

export default connect(null, dispatchRedux)(User);