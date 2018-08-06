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

