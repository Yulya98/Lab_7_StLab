import axios from "axios";

export function onChangeEmail(e){
    return(dispatch)=>{dispatch(changeEmail(e))};
}

export function changeEmail(e){
    return{
        type: "CHANGE_EMAIL",
        email: e.target.value
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

export function handleSubmit(email,password){
    return(dispatch)=> {
        e.preventDefault();
        var obj = {};
        obj.Email = email;
        debugger;
        obj.Password = password;
        axios.post('registrationform', obj)
            .then((response) => {
                if (!response.data)
                    alert("Vas netu");
                dispatch(isVisibleProfile(response.data));
            });
    }
}

export function isVisibleProfile(data) {
    var flag;
    if(data === true){
        flag = false;
    }
    else{
        flag = false;
    }
    return{
        type: "CHANGE_VISIBLE_PROFILE",
        isVisibleProfile: data,
        isVisibleAuthorization: flag
    }
}