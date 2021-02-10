import { createStore } from 'redux';

export default createStore(function (state, action) {

    if (state === undefined) {
        return { userList: 'no_login' }
    }

    if (action.type === 'USERLIST') {
        return { ...state, userList: action.userList, id: action.id, pw: action.pw }
    }

    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())