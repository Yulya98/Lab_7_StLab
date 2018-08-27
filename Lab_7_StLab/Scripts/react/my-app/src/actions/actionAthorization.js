import axios from "axios";
import * as constants from "../constants/constants"
import {authenticaiton} from "./actionLogin"

export function onChangeEmail(e){
    return(dispatch) => {dispatch(changeEmail(e.target.value))};
}

export function onChangeRedirectToReferrer() {
    authenticaiton.authenticate(true);
    return (dispatch) =>{
        dispatch(changeRedirectReferrer());
    }
}

export function changeRedirectReferrer() {
    return{
        type: constants.CHANGE_REDIRECT_TO_REFFER,
        redirectToReferrer: true
    }
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
                    dispatch(changeVisibleAuthorization(response.data))
                    dispatch(changeRegistrationUser());
                });
        });

    }
}

export function isVisibleProfile(data) {

    return{
        type: constants.CHANGE_VISIBLE_PROFILE,
        isVisibleProfile: data
    }
}

export  function  changeVisibleAuthorization(data) {
    var flag;
    if(data === true){
        flag = false;
    }
    else{
        flag = true;
    }
    return{
        type: constants.CHANGE_VISIBLE_AUTHORIZATION,
        isVisibleAuthorization: flag
    }
}

export  function  changeRegistrationUser() {
    return{
        type: constants.CHANGE_USER_REGISTRATION,
        isRegistrationUser: true
    }
}

export function changeVisibleRegistrations(){
    return (dispatch) =>{
        dispatch(changeVisibleRegistration());
        dispatch(changeVisibleAuthorizationFlag());
    }
}

export function changeVisibleRegistration(){
    return{
        type: constants.CHANGE_VISIBLE_REGISTRATIONS,
        isVisibleRegistration: true
    }
}

export function changeVisibleAuthorizationFlag(){
    return{
        type: constants.CHANGE_VISIBLE_AUTHORIZATION,
        isVisibleAuthorization: false
    }
}


