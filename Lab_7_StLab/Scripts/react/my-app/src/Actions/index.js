import axios from "axios";

export function componentWillMount(){
    return(dispatch)=>{
        debugger;
        axios.post('searchActiveUserId')
            .then(function(response) {
                dispatch(searchActiveUserId(response.data))
            });
    }
}

export function searchActiveUserId(data){
    return{
        type:"CHANGE_ACTIVE_USER",
        activeUserId: data
    }
}



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
