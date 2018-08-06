var ReactDOM = require('react-dom');


let defaultState={
    email: "",
    password: "",
    activeUserId: ""
}

const mainReducer=(state=defaultState,action)=>{
    debugger;
    if(action.type === "CHECK_USER"){
        debugger;
        return {
                ...state
        }
    }
    if(action.type === "CHANGE_EMAIL"){
        return {
            ...state,
            email: action.email
    }
    }
    if(action.type === "CHANGE_PASSWORD"){
        return{
            ...state,
            password: action.password
        }
    }
    if(action.type ==="CHANGE_ACTIVE_USER"){
        return{
            ...state,
            activeUserId: action.activeUserId
        }
    }
}

export default mainReducer;