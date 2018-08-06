import axios from "axios";
import App from "../Profile.js"
var ReactDOM = require('react-dom');

export function onChangeEmail(e){
    return(dispatch)=>{dispatch(changeEmail(e))};
}

export function changeEmail(e){
    return{
        type: "CHANGE_EMAIL",
        email: e.target.value
    }
}

export function loadColor(a,b){
    return(dispatch)=> {
        var obj = {};
        obj.Email = a;
        debugger;
        obj.Password = b;
        axios.post('registrationform', obj)
            .then(function (response) {
                dispatch(checkUser(response.data));
            });
    }
}

export function checkUser(response){
    if(response == true) {
        ReactDOM.render(
            <App/>,
            document.getElementById("app")
        )
    }else {
        alert("Net takogo usera");
    }
    return{
        type:"CHECK_USER",
    }
}


export function onChangePassword(e){
    debugger;
    return(dispatch)=>{dispatch(changePassword(e))};
}

export function changePassword(e){
    return{
        type: "CHANGE_PASSWORD",
        password: e.target.value
    }
}
