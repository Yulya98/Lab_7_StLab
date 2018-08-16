import * as constants from "../constants/constantsRegistration"

export function onChangeName(e){
    return (dispatch) => {
        dispatch(changeName(e.target.value));
    }
}

export function changeName(data){
    return{
        type: constants.CHANGE_NAME_REGISTRATION,
        name: data
    }
}

export function onChangeSurname(e){
    return (dispatch) => {
        dispatch(changeSurname(e.target.value));
    }
}

export function changeSurname(data){
    return{
        type: constants.CHANGE__SURNAME_REGISTRATION,
        surname: data
    }
}

export function onChangepPseoudonym(e){
    return (dispatch) => {
        dispatch(changePseoudonym(e.target.value));
    }
}

export function changePseoudonym(data){
    return{
        type: constants.CHANGE__PSEOUDONYM_REGISTRATION,
        pseoudonym: data
    }
}

export function onChangepEmail(e){
    return (dispatch) => {
        dispatch(changeEmail(e.target.value));
    }
}

export function changeEmail(data){
    return{
        type: constants.CHANGE__EMAIL_REGISTRATION,
        registrationEmail: data
    }
}

export function onChangepSphere(e){
    return (dispatch) => {
        dispatch(changeSphere(e.target.value));
    }
}

export function changeSphere(data){
    return{
        type: constants.CHANGE__SPHERE_REGISTRATION,
        sphere: data
    }
}

export function onChangepCity(e){
    return (dispatch) => {
        dispatch(changeCity(e.target.value));
    }
}

export function changeCity(data){
    return{
        type: constants.CHANGE__CITY_REGISTRATION,
        city: data
    }
}

export function onChangepPassword(e){
    return (dispatch) => {
        dispatch(changePassword(e.target.value));
    }
}

export function changePassword(data){
    return{
        type: constants.CHANGE__PASSWORD_REGISTRATION,
        registrationPassword: data
    }
}

export function visibleProfile(){
    return (dispatch) => {
        dispatch(changeProfile());
    }
}

export function changeProfile(){
    return{
        type: constants.CHANGE_VISIBLE_PROFILE_FROM_AUTHORIZATION,
        isVisibleProfile: true,
        isVisibleRegistration: false,
        isRegistrationUser: true
    }
}




