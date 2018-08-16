import axios from "axios";
import * as constants from "../constants/constantsAuthorization"

export function onChangeEmail(e){
    return(dispatch) => {dispatch(changeEmail(e.target.value))};
}

export function changeEmail(e){
    return{
        type: constants.CHANGE_EMAIL,
        email: e
    }
}

export function onChangePassword(e){
    return(dispatch) => {dispatch(changePassword(e.target.value))};
}

export function changePassword(e){
    console.log(e);
    return{
        type: constants.CHANGE_PASSWORD,
        password: e
    }
}

export function handleSubmit(email,password){
    return(dispatch) => {
        var obj = {};
        obj.Email = email;
        obj.Password = password;
        let promise = new Promise((resolve,reject )=>{
            axios.post('registrationform', obj)
                .then((response) => {
                    if (!response.data)
                        alert("Incorrect data");
                    dispatch(isVisibleProfile(response.data));
                });
        });

    }
}

export function isVisibleProfile(data) {
    var flag;
    if(data === true){
        flag = false;
    }
    else{
        flag = true;
    }
    return{
        type: constants.CHANGE_VISIBLE_PROFILE,
        isVisibleProfile: data,
        isVisibleAuthorization: flag,
        isRegistrationUser: true
    }
}

export function isVisibleRegistrations(){
    return (dispatch) =>{
        dispatch(changeVisibleRegistration());
    }
}

export function changeVisibleRegistration(){
    return{
        type: constants.CHANGE_VISIBLE_REGISTRATION,
        isVisibleRegistration: true,
        isVisibleAuthorization: false
    }
}


