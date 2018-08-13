import axios from "axios";

export function onChangeEmail(e){
    debugger;
    return(dispatch)=>{dispatch(changeEmail(e.target.value))};
}

export function changeEmail(e){
    debugger;
    return{
        type: "CHANGE_EMAIL",
        email: e
    }
}

export function onChangePassword(e){
    return(dispatch)=>{dispatch(changePassword(e.target.value))};
}

export function changePassword(e){
    console.log(e);
    return{
        type: "CHANGE_PASSWORD",
        password: e
    }
}

export function handleSubmit(email,password){
    return(dispatch)=> {
        var obj = {};
        obj.Email = email;
        debugger;
        obj.Password = password;
        let promise = new Promise((resolve,reject )=>{
            debugger;
            axios.post('registrationform', obj)
                .then((response) => {
                    if (!response.data)
                        alert("Vas netu");
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
        type: "CHANGE_VISIBLE_PROFILE",
        isVisibleProfile: data,
        isVisibleAuthorization: flag
    }
}

export function isVisibleRegistrations(){
    return (dispatch) =>{
        dispatch(changeVisibleRegistration());
    }
}

export function changeVisibleRegistration(){
    return{
        type:"CHANGE_VISIBLE_REGISTRATION",
        isVisibleRegistration: true,
        isVisibleAuthorization: false
    }
}