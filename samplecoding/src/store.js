import { createStore } from 'redux';

/*
 state : ������
 action : ��� ����
 */
export default createStore(function (state, action) {
    if (state === undefined) {
        return {number:0}
    }
    if (action.type === 'INCREMENT') {
        return {...state, number:state.number + action.size}
    }
    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
