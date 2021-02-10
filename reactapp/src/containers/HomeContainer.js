import { connect } from 'react-redux';
import Home from "../component/Home";

function reduxToReact(state) {
    console.log(state.userList);
    return {
        userList : state.userList,
        id : state.id,
        pw : state.pw
    }
}

export default connect(reduxToReact)(Home);