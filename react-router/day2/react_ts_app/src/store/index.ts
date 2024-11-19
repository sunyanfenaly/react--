import {legacy_createStore} from "redux";

const initState = {
    count: 0,
    name: "张三"
}

const reducer = (state, action) => {
    console.log(state, action)
    switch (action.type) {
        case "changeName":
            return {...state, name: action.payload};
        case "changeCount":
            return {...state, count: state.count + 1};
        case 'reduce':
            return {...state, count: state.count - 1};
        default:
            return state;
    }
}

const store = legacy_createStore(reducer, initState);

export default store;