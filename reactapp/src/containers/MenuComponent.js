import MenuComponent from "../component/MenuComponent";
import { connect } from "react-redux";

function reduxToReact(state) {
    console.log(state.userList);
    return {
        userList: state.userList,
        id: state.id,
        pw: state.pw
    }
}

export default connect(reduxToReact)(MenuComponent);