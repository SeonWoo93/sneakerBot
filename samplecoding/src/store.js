import { createStore } from 'redux';

/*
 state : 데이터
 action : 어떠한 행위
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
